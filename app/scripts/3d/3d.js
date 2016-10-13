function draw3d(data1){
	  // Create and populate a data table.
    var data = new vis.DataSet();
    // create some nice looking data with sin/cos
    var counter = 0;
    var steps = 50;  // number of datapoints will be steps*steps
    var axisMax = 314;
    var axisStep = axisMax / steps;
    for (var x = 0; x < R.wds.length; x+=1) {
        for (var y = 0; y < R.genes.length; y+=1) {
//             var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
            var value = data1[x][y];
            data.add({
//            	id:counter++,
            	x:x,
            	y:y,
            	z:value,
            	style:value
            	});
        }
    }

    // specify options
    var options = {
        width:  '20000px',
        height: '5052px',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5
    };

    // Instantiate our graph object.
    var container = document.getElementById('visualization');
    var graph3d = new vis.Graph3d(container, data, options);
}

//init();
/**
 * x-位点，y-基因，z-差值
 * 
 * ATGC的排列组合 4*3*2*1=24
 * 位点几k
 * 
 * 
 */
var R={
	path:"d:/genotype.dat",
//	path:"app/res/asf.txt",
	wds:[],
	genes:[],
	lines:null,
	vData:null,
	process:function(){
		this.init();
		this.calculate();
		this.draw();
	},
	init:function(){
		var f=new File(this.path);
		var data=f.find();
		var lines=data.split("\n");
//		console.log(lines[0]);
		//产生基因
		var raw=["A","T","G","C"];
		raw.each(function(element,index){
			raw.each(function(element1,index1){
				R.genes.push(element+element1);
			})
		})
		console.log(this.genes);
		//产生位点
		R.wds=lines.shift(0).split(" ");
		console.log(this.wds);
		R.lines=lines;
	},
	calculate:function(){
		//生成需要渲染的数据
		this.vData={};
		//初始化
		R.wds.each(function(wd,i){
			R.vData[i]={};
			R.genes.each(function(gene,j){
				R.vData[i][j]=0;
			})
		});
//		console.log(this.vData);
//		//统计
		var halfLines=R.lines.length/2;
		R.lines.each(function(element,row){
			var incr=row>halfLines?1:-1;
			var values=element.split(" ");
//			console.log(values)
			values.each(function(gene,wdIndex){
				gene=gene.trim();
				if(gene.length!=2){
					log("error length",gene);
					return null;
				}
				var geneIndex=R.genes.find(gene);
				if(geneIndex==-1){
					console.warn(R.genes)
					console.error("gene can't be found:"+gene)
					return null;
				}
				R.vData[wdIndex][geneIndex]+=incr;
			});
		});
		console.log(this.vData);
	},
	draw:function(){
		draw3d(this.vData);
	}
}
//R.process();
























































