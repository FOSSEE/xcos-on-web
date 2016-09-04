## Hrishi Hiraskar
## 31 August 2016

import gevent
import time
from gevent import monkey
from gevent.pywsgi import WSGIServer
from flask import Flask, request, Response, render_template

monkey.patch_all()

app = Flask(__name__)

def event_stream():
	# Open the log file
	log_dir = "../../bin/"				# Log file directory
	log_name = "scilab-log-0.txt"			# Log file name
	logfile = open(log_dir + log_name, "r")
	# Seek file pointer to the end of file
	logfile.seek(0,2)
	# Start sending log
	LOOK_DELAY = 0.01				# Delay time to look for new line (in s)
	while 1:
		line = logfile.readline()
		if not line:
			# If no new line is found
			# Wait for some time and continue
			gevent.sleep(LOOK_DELAY)
			continue
		print(line)
		yield "event: log\ndata: "+line+"\n\n";
		
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

