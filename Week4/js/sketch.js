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
var yposition = 0;
var xposition = 50;
var catcher = 200;

let imagenumber=0
let bottle;


function preload() {
  title = loadFont('assets/Bubble Rainbow.ttf');
  name = loadFont('assets/Hellorain.ttf');
  img = loadImage("./assets/orange flower.png");
  for (let i = 0; i < 3; i++) {

    bottle=loadImage('./assets/watering-can.png')
  }

}


function Drop() {
  this.x = random(200);
  this.y = 10;
  this.length = random(3,10);
  this.speed = 1;

  this.show = function() {
    stroke(0,60,250);
  	strokeWeight(3);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.move = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
  };

}

const circles = [];
const flowers = [];

function setup() {
  createCanvas(500, 500);

  circleColor = color(random(255), random(255), random(255));
  strokeWeight(2);
  drop = new Drop();
  for (let i = 0; i < 10; i++) {

   }
}



function draw() {
  background(199, 252, 255);


  fill(255, 56, 146);
  textSize(size);
  strokeWeight(0);
  textFont(name);
  text("Rebecca Vann",335,490 );
  textSize(size*2);
  textFont(title)
  text("Growing Flowers",5,50);
  x = width/2;
  y = height/2;

  if (drop.y >= 400) {
    drop = new Drop();
  }

  drop.show();
  drop.move();

  fallingBall(50,200,250);
    rainCatcher();

    if (catcher > xposition-20 &&
        catcher < xposition+20 &&
        yposition >= 380)
    {
      happyText()
    }



  if (circleFilling) {
    circleSize += 2;

    const overlappingCircle = getOverlappingCircle();
    if(overlappingCircle){
      circleFilling = false;
      circles.splice(circles.indexOf(overlappingCircle), 1);
    }



    fill(circleColor);
    circle(mouseX, mouseY, circleSize);
  }


  for (const c of circles) {
    c.draw();
  }


function resetGame(){
y=0;
x=0;
circle=0;{return c;}
}




function getOverlappingCircle() {
  for(const c of circles){
    if(dist(c.x, c.y, mouseX, mouseY) <
      circleSize / 2 + c.size / 2 + 2){
      return c;
    }
  }

  return undefined;
}

function isOffScreen(){
  return mouseX < circleSize / 2 ||
         mouseX > width - circleSize / 2 ||
         mouseY < circleSize / 2 ||
         mouseY > height - circleSize / 2;
}


function mousePressed() {
  circleSize = 0;
  circleColor = color(random(255), random(255), random(255));
  circleFilling = true;
}

function mouseReleased() {
  if (circleFilling) {
    circles.push(new Circle(mouseX, mouseY, circleSize, circleColor));
  }
  circleFilling = false;
}



class Circle {

  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {

    fill(this.color);
    circle(this.x, this.y, this.size);
    rect(right,up,50,20);

  }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up = up - 20;
  } else if (keyCode === DOWN_ARROW) {
   up = up + 20;
  }
  if (keyCode === LEFT_ARROW) {
    right = right - 20;
  } else if (keyCode === RIGHT_ARROW) {
    right = right + 20;
  }

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

function happyText(){
    textSize(20)
    fill(0)
    text("Yay!",200,200)
}

function rainCatcher(){

  catcher = mouseX

  rectMode(CENTER)
  fill(0)
  rect(catcher,380,40,40)

}

function fallingBall(r,g,b){

  yposition++

  noStroke()
  fill(r,g,b)

  triangle(xposition-10,yposition,xposition+10,yposition,xposition,yposition-40)
  ellipse(xposition,yposition,20,20);

  yposition = yposition + 8;

  if (yposition > 450){
  yposition = 0;
  xposition = random(400);
  }

}
