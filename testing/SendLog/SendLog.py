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
	while not line:
		# If no new line is found
		# Wait for some time and look again
		gevent.sleep(LOOK_DELAY)
		line = file.readline()
	return line
		
def parse_line(line):
	# Function to parse the line
	# Returns tuple of figure ID and state
	# state = 0 if new figure is created
	#         1 if current fig end
	#         2 otherwise
	linewords = line.split(' ')
	if linewords[0] == "Initialization":
		# New figure created
		# Get fig id
		figureID = int(linewords[-1])
		return (figureID, 0)
	elif linewords[0] == "Ending":
		# Current figure end
		# Get fig id
		figureID = int(linewords[-1])
		return (figureID, 1)
	else:
		# Current figure coordinates
		figureID = int(linewords[2])
		return (figureID, 2)

def event_stream():
	# List to store figure IDs
	figureList = []
	# Log file directory
	log_dir = "../../bin/"
	# Log file name	
	log_name = "scilab-log-0.txt"
	# Open the log file
	logfile = open(log_dir + log_name, "r")
	# Seek the file pointer to the end of file
	logfile.seek(0,2)
	line = get_line(logfile)
	r = parse_line(line)
	figureID = r[0]
	figureList.append(figureID)
	# Start sending log
	while len(figureList) > 0:
		line = get_line(logfile)
		# Parse the line to get ID and state
		r = parse_line(line)
		figureID = r[0]
		state = r[1]
		if state == 0:
			# New figure created
			# Add figure ID to list
			figureList.append(figureID)
		elif state == 1:
			# End of figure
			# Remove figure ID from list
			figureList.remove(figureID)
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
