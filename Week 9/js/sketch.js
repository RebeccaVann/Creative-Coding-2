var x = 0;
var y = 0;
let a=0;
let z=0;


function setup() {
  createCanvas(800, 600, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(0);
  normalMaterial();
  createBox(20, 20, 20,-250, -150, false);
  createBox(50, 50, 50, 250, 150, false);
  createTorus();
  createSphere();
  createCone();



  if (keyCode==UP_ARROW){
    z -=1;
  }
  if (keyCode==DOWN_ARROW){
    z +=1;
  }

  if (keyCode==RIGHT_ARROW){
    x+=1;
  }
  if (keyCode==LEFT_ARROW){
    x -=1;
  }


}

// this creates a single torus
function createTorus() {
  push();
  translate(25, 25);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.007);
  torus(150, 8, 84, 20);
  pop();
}



function createCone() {

  push();
  translate(x, y, z);
  //rotateX(0);
  rotateY(frameCount * 0.05);
  rotateZ(25);
  stroke(120);
  fill(0,150,150);
  cone(100,-100,20);
  pop();
}

function createSphere() {
  push();
  translate(x, y, z);
  //rotateX(0);
  rotateY(frameCount * 0.05);
  rotateZ(25);
  stroke(120);
  fill(0,190,70);
  sphere(50,20);
  pop();
}

function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(w, h, d);
  pop();
}
