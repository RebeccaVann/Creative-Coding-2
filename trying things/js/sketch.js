var bgcolor = (100, 100, 100);
var circleFilling = false;
var circleSize = 0;
var circleColor;
var size = 25
var speedX = 2.5;
var speedY= 1.6;
var x;
var y;
var gravity = 0.1;
var drop;
var right = 200;
var up = 200;
var cflowerFilling = false;
var flowerSize = 0;
var img;

var drop = []

let imagenumber=0
let wateringcan;




function preload() {
  title = loadFont('assets/Bubble Rainbow.ttf');
  name = loadFont('assets/Hellorain.ttf');
  for (let i = 0; i < 3; i++) {

    wateringcan=loadImage('./assets/watering-can.png')
  }



  this.show = function() {
    stroke(0,60,250);
  	strokeWeight(3);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.move = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
  }

}

const circles = [];
const flowers = [];


function setup() {
  createCanvas(600, 600);
  //frameRate(60);
  for(var i = 0; i < 200; i++) {
      drop[i] = new Drop();
  }

}



function draw() {
  background(bgcolor);
  flower();
  ground();
  for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
  }
  fill(235, 194, 204, 240);
  textSize(size);
  strokeWeight(0);
  textFont(name);
  text("Rebecca Vann",435,590 );
  textSize(size*2);
  textFont(title)
  text("Growing Flowers",5,50);
  x = width/2;
  y = height/2;

}

function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 530, 600, 530);
}


function flower() {
  //drawFlower();

  //flower1
  for (var r11 = 0; r11 < 10; r11++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(400, 550, 400, 400 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(400, 550, 400, 460);
    }
    noStroke();
  }

  push();
  fill(230, 190, 230, 240);
  translate(400, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();


  //flower2
  for (var r21 = 0; r21 < 10; r21++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(300, 580, 300, 430 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(300, 580, 300, 490);
    }
    noStroke();
  }

  push();
  fill(235, 194, 204, 240);
  translate(300, 430);
  noStroke();

  for (var r2 = 0; r2 < 10; r2++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();


  //flower3
   for (var r31 = 0; r31 < 10; r31++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(180, 535, 180, 390 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(180, 535, 180, 435);
    }
    noStroke();
  }

  push();
  fill(245, 204, 174, 240);
  translate(180, 385);
  noStroke();
  for (var r3 = 0; r3 < 10; r3++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();


  //flower4
     for (var r41 = 0; r41 < 10; r41++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(510, 575, 510, 425 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(510, 575, 510, 485);
    }
    noStroke();
  }

  push();
  fill(245, 174, 154, 240);
  translate(510, 425);
  noStroke();
  for (var r4 = 0; r4 < 10; r4++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();

  //flower5
     for (var r51 = 0; r51 < 10; r51++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(70, 600, 70, 450 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(70, 600, 70, 510);
    }
    noStroke();
  }

  push();
  fill(245, 174, 184, 240);
  translate(70, 450);
  noStroke();
  for (var r5 = 0; r5 < 10; r5++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();

  image(wateringcan,mouseX,mouseY,100,70)
}



class Wateringcan {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;


  }
  move() {

    this.y = this.y + random(-0.1, 0.1);
  }

}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;
}}
