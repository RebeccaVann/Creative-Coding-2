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
var timer = 5


function preload() {
  title = loadFont('assets/Bubble Rainbow.ttf');
  name = loadFont('assets/Hellorain.ttf');
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

function setup() {
  createCanvas(400, 400);
  circleColor = color(random(255), random(255), random(255));
  strokeWeight(2);
  drop = new Drop();
}

function draw() {
  background(199, 252, 255);
  textAlign(CENTER, CENTER);
    textSize(100);
    text(timer, width/2, height/2);
  fill(255, 56, 146);
  textSize(size);
  strokeWeight(0);
  textFont(name);
  text("Rebecca Vann",235,390 );
  textSize(size*2);
  textFont(title)
  text("Growing Flowers",5,50);
  x = width/2;
  y = height/2;
  button = createButton("reset");
  button.position(10, 385);
  button.mousePressed(resetGame);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
   timer --;
 }
 if (timer == 0) {
   text("GAME OVER", width/2, height*0.7);
 }
  if (drop.y >= 400) {
    drop = new Drop();
  }

  drop.show();
  drop.move();



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




  }

}
