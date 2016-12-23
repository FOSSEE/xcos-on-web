## Hrishi Hiraskar
## 23 October 2016

import gevent
import time
import os
import threading
from gevent import monkey
from gevent.pywsgi import WSGIServer
from flask import Flask, request, Response, render_template, send_from_directory
from werkzeug import secure_filename

monkey.patch_all(aggressive=False)

import subprocess

app = Flask(__name__, static_folder='webapp/')

# This is the path to the upload directory
app.config['UPLOAD_FOLDER'] = 'uploads/'
# Make the upload directory if not available
subprocess.Popen('mkdir -p ' + app.config['UPLOAD_FOLDER'], shell = True)

# These are the extension that we are accepting to be uploaded
app.config['ALLOWED_EXTENSIONS'] = set(['zcos', 'xcos'])

# Delay time to look for new line (in s)
LOOK_DELAY = 0.1
# States of the line
INITIALIZATION = 0
ENDING = 1
DATA = 2
NOLINE = -1
# Scilab dir, can't run absolute paths
SCI = "../scilab/"
# List to store figure IDs
figure_list = []
# List to store filenames of files
xcos_file_list = []

class line_and_state:
	# Class to store the line and its state
	line = None
	state = NOLINE
	def __init__(self, line, state):
		self.line = line
		self.state = state
	def set(self, line_state):
		self.line = line_state[0]
		self.state = line_state[1]
		return False
	def get_line(self):
		return self.line
	def get_state(self):
		return self.state
		
def parse_line(line):
	# Function to parse the line
	# Returns tuple of figure ID and state
	# state = INITIALIZATION if new figure is created
	#         ENDING if current fig end
	#         DATA otherwise
	line_words = line.split(' ')
	if line_words[2] == "Initialization":
		# New figure created
		# Get fig id
		figure_id = int(line_words[-1])
		return (figure_id, INITIALIZATION)
	elif line_words[2] == "Ending":
		# Current figure end
		# Get fig id
		figure_id = int(line_words[-1])
		return (figure_id, ENDING)
	else:
		# Current figure coordinates
		figure_id = int(line_words[2])
		return (figure_id, DATA)
		
def get_line_and_state(file):
	# Function to get a new line from file
	# This also parses the line and appends new figures to figure List
	global figure_list
	line = file.readline()
	if not line:
		return (None, NOLINE)
	parse_result = parse_line(line)
	figure_id = parse_result[0]
	state = parse_result[1]
	if state == INITIALIZATION:
		# New figure created
		# Add figure ID to list
		figure_list.append(figure_id)
		return (None, INITIALIZATION)
	elif state == ENDING:
		# End of figure
		# Remove figure ID from list
		figure_list.remove(figure_id)
		return (None, ENDING)
	return (line, DATA)

def event_stream(xcos_file_id):
	global figure_list
	# If no id is sent, return
	if(len(xcos_file_id)==0):
		return
	xcos_file_id = int(xcos_file_id)
	xcos_file_dir = os.getcwd() + '/uploads/'
	xcos_file_name = xcos_file_list[xcos_file_id]
	# Get previously running scilab process IDs
	proc = subprocess.Popen("pgrep scilab", stdout=subprocess.PIPE, shell=True)
	# out will contain output of command, the list of process IDs of scilab
	(out, err) = proc.communicate()
	_l = len(out)
	# Run xcos file
	command = ["./"+SCI+"bin/scilab-adv-cli", "-nogui", "-noatomsautoload", "-nb", "-nw", "-e", "loadXcosLibs();importXcosDiagram('" + xcos_file_dir + xcos_file_name + "');xcos_simulate(scs_m,4);mode(2);quit()"]
	scilab_proc = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=False);
	# Wait till xcos is launched
	while len(out) == _l:
		# If length of out equals _l, 
		#    it means scilab hasn't launched yet
		# Wait
		gevent.sleep(LOOK_DELAY)
		# Get process IDs of scilab instances
		proc = subprocess.Popen("pgrep scilab", stdout=subprocess.PIPE, shell=True)
		# out will contain output of command, the list of process IDs of scilab
		(out, err) = proc.communicate()	
	# out will contain output of command, the list of process IDs of scilab
	# Get the latest process ID of scilab
	pid = out.split()[-1]
	# Define function to kill scilab(if still running) and remove files
	def kill_scilab():
		# Kill scilab by it's pid
		subprocess.Popen(["kill","-9",pid])
		# Remove log file
		subprocess.Popen(["rm",log_dir+log_name])
		# Remove xcos file
		subprocess.Popen(["rm",xcos_file_dir+xcos_file_name])
	# Log file directory
	# As the scilab process is spawned by this script
	#    the log directory is same as that of this script
	log_dir = "" 
	# Log file name	
	log_name = "scilab-log-"+pid+".txt"
	# Open the log file
	log_file = open(log_dir + log_name, "w+")
	# Kill scilab-adv-cli, if running and get it's output
	# If the simulation is error free, no output is generated
	scilab_proc.kill()
	(scilab_out, scilab_err) = scilab_proc.communicate();
	# Check for empty diagram
	if "Empty diagram" in scilab_out:
		yield "event: ERROR\ndata: Empty diagram\n\n"
		kill_scilab();
		return
	# Some other error
	elif len(scilab_out) > 0:
		yield "event: ERROR\ndata: " + scilab_out + "\n\n"
		kill_scilab();
		return
	# Start sending log
	line = line_and_state(None, NOLINE)
	while (line.set(get_line_and_state(log_file)) or line.get_state() != ENDING or len(figure_list) > 0):
		# Get the line and loop until the state is ENDING and figure_list empty
		if line.get_state() != DATA:
			gevent.sleep(LOOK_DELAY)
		else:
			yield "event: log\ndata: "+line.get_line()+"\n\n"
		# Reset line, so server won't send same line twice
		line = line_and_state(None, NOLINE)
	# Finished Sending Log
	kill_scilab()
	# Notify Client
	yield "event: DONE\ndata: None\n\n"

# Route that will process the file upload
@app.route('/upload', methods=['POST'])
def upload():
	# Get the file
	file = request.files['file']
	# Check if the file is not null
	if file:
		# Make the filename safe, remove unsupported chars
		client_id = len(xcos_file_list)
		filename = str(client_id)+".xcos"
		# Move the file form the temporal folder to
		# the upload folder we setup
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		xcos_file_list.append(filename)
		return str(client_id)
	else:
		return "error"
		
@app.route('/SendLog')
def sse_request():
	# Set response method to event-stream
	return Response(event_stream(request.args.get('id', '')), mimetype='text/event-stream')

@app.route('/<path:path>')
def static_file(path):
	return app.send_static_file(path)

@app.route('/')
def page():
	return app.send_static_file('index.html')

if __name__ == '__main__':
	# Set server address 127.0.0.1:8001/
	http_server = WSGIServer(('127.0.0.1', 8001), app)
	http_server.serve_forever()