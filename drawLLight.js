function drawLLight (ctx) {
	const clickSound2 = new Audio('assets/beam.mp3');
    clickSound2.addEventListener('loadedmetadata', function() {
        clickSound2.play();  
    });
    ctx.save()
    ctx.transform(10.8,0.5,0.5,10,-690,-1210)
    // ctx.transform(10.8,0.5,0.5,10,ctx.canvas.width*0.2,ctx.canvas.height*0.2)
    drawLLightRaw(ctx)
    ctx.restore()
}

function drawLLightRaw (ctx) {
	ctx.beginPath();
	ctx.fillStyle = 'rgba(255, 251, 115, 0.5)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(114.413170, 136.199100);
	ctx.lineTo(73.360776, 177.103290);
	ctx.lineTo(103.594310, 177.251500);
	ctx.lineTo(120.044910, 137.977540);
	ctx.bezierCurveTo(117.886380, 137.666010, 116.197440, 136.884890, 114.413170, 136.199100);
	ctx.closePath();
	ctx.fill();
}

