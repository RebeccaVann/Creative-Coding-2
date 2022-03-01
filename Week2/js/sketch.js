var circleFilling = false;
var circleSize = 0;
var circleColor;
var size = 25
var speedX = 2.5;
var speedY= 1.6;
var x;
var y;


const circles = [];

function setup() {
  createCanvas(400, 400);
  circleColor = color(random(255), random(255), random(255));
  strokeWeight(2);

  ;

}

function draw() {
  background(199, 252, 255);

  fill(255, 56, 146);
  textSize(size);
  text("Rebecca Vann",235,390 );
  textSize(size*2);
  text("Popping Bubbles",5,50);
  x = width/2;
  y = height/2;
  button = createButton("reset");
  button.position(10, 385);
  button.mousePressed(resetGame);


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

  x = x + random(-speedX, speedX);
 y = y + random(-speedY, speedY);
 ellipse(x, y, 20, 20)

  }

}
