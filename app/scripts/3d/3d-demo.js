function draw3d1(){
	  // Create and populate a data table.
    var data = new vis.DataSet();
    // create some nice looking data with sin/cos
    var counter = 0;
    var steps = 50;  // number of datapoints will be steps*steps
    var axisMax = 314;
    var axisStep = axisMax / steps;
//    for (var x = -30; x < 30; x+=1) {
//        for (var y = -30; y < 30; y+=1) {
////             var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
//            var value = x*x+y*y;
//            data.add({
////            	id:counter++,
//            	x:x,
//            	y:y,
//            	z:value,
//            	style:value
//            	});
//        }
//    }
    for(var t=0;t<axisMax;t+=axisStep){
    	data.add({
    		x:10*Math.sin(t),
    		y:10*Math.cos(t),
    		z:t,
    		style:t
    		
    		
    		
    	})
    	
    	
    	
    }
    // specify options
    var options = {
        width:  '500px',
        height: '552px',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5
    };

    // Instantiate our graph object.
    var container = document.getElementById('visualization1');
    var graph3d = new vis.Graph3d(container, data, options);
}
draw3d1();