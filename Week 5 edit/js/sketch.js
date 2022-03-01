var img;
var names = [];
var myImage;
var i = 0;
var imagesToDisplay = [];
var imageClassObject;
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


let imagenumber=0
let bottle;


function preload() {
  title = loadFont('assets/Bubble Rainbow.ttf');
  name = loadFont('assets/Hellorain.ttf');
  img = loadImage("./assets/orange flower.png");
  for (let i = 0; i < 3; i++) {

    bottle=loadImage('./assets/watering-can.png')

		// read in the file
		names = loadStrings("./assets/fly.txt");
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

	// go through the file names
	for(var k = 0; k < names.length; k++)
	{
		// load the image
		img = loadImage("./assets/butterfly/" + names[k]);
		// create an object from our image class
		imageClassObject = new imageclass(img, 100,100, 335, 235);
		// add each object to the array
		imagesToDisplay[k] = imageClassObject;
	}
	//console.log("blah: " + names.length);
	setInterval(changeTheDarnAnimation, 100);
}

function draw(){

background(199, 252, 255);

	image(imagesToDisplay[i].getImage(),
	imagesToDisplay[i].getX(),
	imagesToDisplay[i].getY(),
	imagesToDisplay[i].getW(),
	imagesToDisplay[i].getH());






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

		  }
		  image(bottle,mouseX,mouseY,100,70)
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
}


function changeTheDarnAnimation()
{
	//console.log("I am here..");
	// this increments our frames to display in the animation
	i+=1;
	// check to see if we have gone beyond the size of the array
	if(i >= imagesToDisplay.length)
	{
		// reset to the first index of the array
		i = 0;
	}

	// this updates the x of all the images in the array for smooth movement
	for(var m = 0; m < imagesToDisplay.length; m++)
	{
		imagesToDisplay[m].moveX(10);
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
