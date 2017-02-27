var can,ctx,w,h,
	girlPic = document.getElementById("girl"),
	starPic = document.getElementById("star"),
	num = 60,
	stars = [],
	lastTime,
	deltaTime,
	switchy = false,
	life = 0;

function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d")

	w = can.width;
	h = can.height;

	document.addEventListener("mousemove", mousemove, false);

	// girlPic.src = "img/girl.jpg";
	// starPic.src = "img/star.png";

	for (var i = 0; i < num; i++) {
		stars.push(new starObj());
		stars[i].init();
	}

	drawBackground();
	lastTime = Date.now();
	gameloop();
}

function gameloop() {
	window.requestAnimationFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawStar();
	aliveUpdate();
}

function drawBackground() {
	var bgctx = document.getElementById("canvasbg").getContext("2d");
	bgctx.fillStyle = "#393550";
	bgctx.fillRect(0,0,w,h);
	bgctx.drawImage(girlPic,100,150,600,300);
}

function mousemove(e){
	if (e.offsetX || e.layerX) {
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;
		// out switchy = false; in switchy = true;
		//px 在范围内 && py 在范围内
		if (px > 100 && px < 700 && py >150 && py < 450) {
			switchy = true;
		}else{
			switchy = false;
		}
	}
}

document.body.onload = init;