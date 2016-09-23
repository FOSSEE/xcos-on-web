## Hrishi Hiraskar
## 23 September 2016

import gevent
import time
from gevent import monkey
from gevent.pywsgi import WSGIServer
from flask import Flask, request, Response, render_template

monkey.patch_all()

app = Flask(__name__)

# Delay time to look for new line (in s)
LOOK_DELAY = 0.1	
# States of the line
INITIALIZATION = 0
ENDING = 1
DATA = 2
NOLINE = -1
# List to store figure IDs
figure_list = []

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
	if line_words[0] == "Initialization":
		# New figure created
		# Get fig id
		figure_id = int(line_words[-1])
		return (figure_id, INITIALIZATION)
	elif line_words[0] == "Ending":
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

def event_stream():
	global figure_list
	# Log file directory
	log_dir = "../../bin/"
	# Log file name	
	log_name = "scilab-log-0.txt"
	# Open the log file
	log_file = open(log_dir + log_name, "r")
	# Seek the file pointer to the end of file
	# 0 signifies the displacement index relative to given position and
	# 2 signifies the position (here, end of file; 0 is for start of file and 1 is for current position)
	# Refer https://www.tutorialspoint.com/python/file_seek.htm for more
	log_file.seek(0,2)
	# Start sending log
	line = line_and_state(None, NOLINE)
	while line.set(get_line_and_state(log_file)) or (line.get_state() != ENDING or len(figure_list) > 0):
		# Get the line and loop until the state is ENDING and figure_list empty
		if line.get_state() != DATA:
			gevent.sleep(LOOK_DELAY)
		else:
			yield "event: log\ndata: "+line.get_line()+"\n\n";
	# Finished Sending Log
	yield "event: DONE\ndata: None\n\n";
		
@app.route('/SendLog')
def sse_request():
	# Set response method to event-stream
	return Response(event_stream(), mimetype='text/event-stream')

@app.route('/')
def page():
	return render_template('index.html')

if __name__ == '__main__':
	# Set server address 127.0.0.1:8001/
	http_server = WSGIServer(('127.0.0.1', 8001), app)
	http_server.serve_forever()
