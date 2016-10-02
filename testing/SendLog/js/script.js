// Hrishi Hiraskar
// 2 October 2016

var eventSource;
var chart_list = [];
var chart_id_list = [];
var data_list = [];
var points_list = []
var option_list = [];
var INTERVAL = 100;

var create_new_chart = function(id){
	// Fuction to create and initialize Google chart on page
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'x');
	data.addColumn('number', 'y');
	var options = {
	  'title' : 'Figure '+id.toString(),
	  curveType: 'function',
      hAxis: {
         title: 'x',
      },
      vAxis: {
         title: 'y',
		     min: -2,
		     max: 2
      },   
      'width':550,
      'height':400
	};
	document.body.innerHTML += "<div id='chart-"+id.toString()+"'></div>";
	var chart = new google.visualization.LineChart(document.getElementById('chart-'+id.toString()));
	chart.draw(data, options);
	chart_id_list.push(id)
	chart_list.push(chart);
	data_list.push(data);
	option_list.push(options);
	points_list.push(new Queue);
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
		if(chart_id_list.indexOf(id)<0)
			create_new_chart(id);
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
		for(var  i=0;i<chart_id_list.length;i++){
			// For each figure,  plot incoming points
			// Get figure id
			var id = chart_id_list[i];
			// Get chart details
			var chart   = new google.visualization.LineChart(document.getElementById('chart-'+id.toString())),
				  data    = data_list[i],
				  options = option_list[i],
				  points  = points_list[i];
			// Add points
			for(var j=0;j<10 && !points.isEmpty();j++){
				  if(data.getNumberOfRows()>=40)
					    data.removeRow(0);
				  data.addRow(points.dequeue());
			}
			// Plot the new points
			chart.draw(data, options);
		}
	}, INTERVAL);
}

// Initialize Google charts api
google.charts.setOnLoadCallback(init);
