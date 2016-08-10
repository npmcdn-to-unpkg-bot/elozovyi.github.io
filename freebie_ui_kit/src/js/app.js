//DIAGRAMS CANVAS
(function () {
	var c = document.getElementById("diagram1");
    if (c.getContext){
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "#a9cf55";
		ctx.arc(80, 80, 74, 1.5 * Math.PI, 0.75 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.strokeStyle = "#ededed";
		ctx.arc(80, 80, 74, 0.75 * Math.PI, 1.5 * Math.PI);
		ctx.stroke();
		ctx.font = "52px Source Sans Pro";
		ctx.fillStyle = "#777";
		ctx.fillText("75%",40,100);
    }
    else {
        alert('Your browser does not support the HTML5 canvas tag');
    }

	c = document.getElementById("diagram2");
    if (c.getContext){
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "#a9cf55";
		ctx.arc(80, 80, 80, 1.5 * Math.PI, 1 * Math.PI);
		ctx.lineTo(80, 80);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#ededed";
		ctx.arc(80, 80, 80, 1 * Math.PI, 1.5 * Math.PI);
		ctx.lineTo(80, 80);
		ctx.fill();
    }
    else {
        alert('Your browser does not support the HTML5 canvas tag');
    }
})();
