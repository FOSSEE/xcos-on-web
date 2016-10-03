// Hrishi Hiraskar
// 3 October 2016 

var chart_id_list = [];
var points_list = [];
var INTERVAL = 50;
var eventSource;

var create_new_chart = function(id){
	// Function to create a new chart
	$('#charts').append("<div id='chart-"+id.toString()+"'></div>");
	$('#chart-'+id.toString()).highcharts({
		chart: {
			type: 'spline',
			animation: false
		},
		title : {
			  text: 'Figure '+id.toString()
		   },
		   xAxis : {
			   title: {
				 text: 'x'
			   },
			   min: 0,
			   max: 30,
			   tickInterval: 2
		   },
		   yAxis : {
			  title: {
				 text: 'y'
			  },
			  plotLines: [{
				 width: 1,
				 color: '#808080'
			  }]
		   },
		   plotOptions : {
				marker: {
					enabled: false,
				}
		   },
		   legend : {
			  enabled: false
		   },
		   exporting : {
			  enabled: false
		   },
		   series : [{
			  name: "Series "+id.toString(),
			  data: []  
		   }]
	});
	chart_id_list.push(id);
	points_list.push(new Queue());
}
        
function init(){
	eventSource = new EventSource('/SendLog');
	// Start listening to server
	eventSource.addEventListener("log", function(event){
		var data = event.data.split(' ');
		var id = parseInt(data[2]),
			x  = parseFloat(data[8]),
			y  = parseFloat(data[9]),
			z  = parseFloat(data[10]);
		if(chart_id_list.indexOf(id)<0)
			create_new_chart(id);
		var index = chart_id_list.indexOf(id);
		points_list[index].enqueue([x,y]);
	}, false);	
	// Stop listening
	eventSource.addEventListener("DONE", function(event){
		eventSource.close(); 	// Close connection
	}, false);
	
	setInterval(function(){
		for(var i=0;i<chart_id_list.length;i++){
			// For each chart
			// Get id and points queue
			var id = chart_id_list[i],
				points = points_list[i];
			// Get chart container	
			var chart = $('#chart-'+id.toString()).highcharts();
			// Get chart data
			var series = chart.series[0];
			// Add points
			for(var j=0;j<500 && !points.isEmpty();j++){
				var point = points.dequeue();
				var x = point[0],
					y = point[1];
				// If there are more points
				// Remove old points
				if(series.data.length>=300)
					series.removePoint(0, false);
				series.addPoint([x,y], false);
			}
			// Shift chart axis to display new values
			if(x>30) chart.xAxis[0].setExtremes(Math.floor(x-30),Math.floor(x));
			// Draw the chart
			chart.redraw();
		}
	}, INTERVAL);
	
}
