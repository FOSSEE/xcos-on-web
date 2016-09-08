## Hrishi Hiraskar
## 8 September 2016

import gevent
import time
from gevent import monkey
from gevent.pywsgi import WSGIServer
from flask import Flask, request, Response, render_template

monkey.patch_all()

app = Flask(__name__)

# Delay time to look for new line (in s)
LOOK_DELAY = 0.01	

def get_line(file):
	# Function to get a new line from file
	line = file.readline()
	if not line:
		# If no new line is found
		# Wait for some time and look again
		gevent.sleep(LOOK_DELAY)
		return get_line(file)
	else:
		return line
		
def parse_line(line):
	# Function to parse the line
	# Returns fig ID if new fig created
	#         -1 if current fig end
	#         -2 otherwise
	linewords = line.split(' ')
	if linewords.count("Initialization") == 1:
		# New fig created
		# Get fig id
		figID = int(linewords[-1])
		return figID
	elif linewords.count("Ending") == 1:
		# Current fig end
		return -1
	else:
		# Current fig coordinates
		return -2

def event_stream():
	# List to store fig IDs
	figList = []
	# Log  file directory
	log_dir = "../../bin/"
	# Log file name	
	log_name = "scilab-log-0.txt"
	# Open the log file
	logfile = open(log_dir + log_name, "r")
	# Seek the file pointer to the end of file
	logfile.seek(0,2)
	figID = 0
	# This loop is to get the first fig ID
	while len(figList) == 0:
		line = get_line(logfile)
		# Check if there is new fig
		r = parse_line(line)
		if r >= 0:
			# Add fig ID to list
			figID = r
			figList.append(figID)
			break
	# Start sending log
	while len(figList) > 0:
		line = get_line(logfile)
		# Parse the line to check state
		r = parse_line(line)
		# Check if there is new fig
		if r >= 0:
			# Add fig ID to list
			figID = r
			figList.append(figID)
		elif r == -1:
			# End of fig
			# Remove fig ID from list
			figList.remove(figID)
		else:
			yield "event: log\ndata: "+line+"\n\n";
	# Finished Sending Log
		
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
