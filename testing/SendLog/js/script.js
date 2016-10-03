// Hrishi Hiraskar
// 3 October 2016

var chart_id_list = [];
var data_list = [];
var points_list = [];
var start_time_list = [];
var INTERVAL = 100;
var eventSource;

var create_new_chart = function(id){
	// Function to create new chart
	document.getElementById('charts').innerHTML += '<canvas id="chart-'+id.toString()+'" width="400" height="100"></canvas><br>';
	chart_id_list.push(id);
	data_list.push(new TimeSeries());
	points_list.push(new Queue());
	start_time_list.push(new Date().getTime());
}

var init = function(){
	eventSource = new EventSource('/SendLog');
	// Start listening to server
	eventSource.addEventListener("log", function(event){
		// Parse data
		var data = event.data.split(' ');
		var id = parseInt(data[2]),
			x  = parseFloat(data[8]),
			y  = parseFloat(data[9]),
			z  = parseFloat(data[10]);
		// If there is new figure
		// Create a new chart
		if(chart_id_list.indexOf(id)<0){
			create_new_chart(id);
		}
		// Get index of figure
		var index = chart_id_list.indexOf(id);
		// Add point to the queue
		points_list[index].enqueue([x,y]);
	}, false);	
	// Stop listening
	eventSource.addEventListener("DONE", function(event){
		eventSource.close(); 	// Close connection
	}, false);
	
	setInterval(function(){
		for(var i=0;i<chart_id_list.length;i++){
			var data = data_list[i],
				start = start_time_list[i],
				points = points_list[i];	
			if(data.data.length==0){
				// If this is a new chart
				// Place chart on page and bind data to it
				var chart = new SmoothieChart({grid:{fillStyle:'#ffffff'},labels:{fillStyle:'#000000'}});
				chart.addTimeSeries(data_list[i], {lineWidth:2,strokeStyle:'#00ff00'});
				chart.streamTo(document.getElementById("chart-"+chart_id_list[i].toString()), 2000);
			}
			// Add points for plotting
			for(var j=0;j<50 && !points.isEmpty();j++){
				var point = points.dequeue();
				data.append(start + point[0]*INTERVAL, point[1]);
			}
		}
	}, INTERVAL);
	
}
