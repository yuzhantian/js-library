var starObj = function(){
	this.x;
	this.y;
	//记录上一次位置
	this.lastX;
	this.lastY;

	this.picNo;
	this.timer;
	//移动速度
	this.xSpd;
	this.ySpd;
}

starObj.prototype.init = function(){
	this.x = Math.random()*600 + 100;
	this.y = Math.random()*300 + 150;
	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;
	this.xSpd = Math.random() * 6 - 3;
	this.ySpd = Math.random() * 6 - 3;
}

starObj.prototype.draw = function() {
	ctx.save();
	ctx.clearRect(this.lastX, this.lastY, 7, 7);
	//globalAlpha 全局透明度
	ctx.globalAlpha = life;
	ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
	ctx.restore();
}

starObj.prototype.update = function() {
	this.lastX = this.x;
	this.lastY = this.y;

	this.x += this.xSpd * deltaTime*0.002;
	this.y += this.ySpd * deltaTime*0.002;

	if (this.x <100 || this.x > 700) {
		this.init();
		return;
	}

	if (this.y <150 || this.y > 450) {
		this.init();
		return;
	}

	this.timer += deltaTime;
	if(this.timer > 50){
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

function drawStar(){
	for (var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate(){
	if (switchy) {
		//show star
		life += 0.03 * deltaTime * 0.05;
		life = life > 1 ? 1 : life;
	}else{
		life -= 0.03 * deltaTime * 0.05;
		life = life < 0 ? 0 : life;
	}
}