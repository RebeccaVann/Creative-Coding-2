var particles;
var names = [];
var size = 25
var img;
var wateringcan;
var x;
var y;
var imagesToDisplay = [];
var imageClassObject;
var imagenumber=0;
var stem;

let TITLE;

//background gradient
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

//5 flowers position
let flowerAX = 70;
let flowerAY = 500;
let flowerASize = 10;

let flowerBX = 165
let flowerBY = 470
let flowerBSize = 17

let flowerCX = 290
let flowerCY = 510
let flowerCSize = 15

let flowerDX = 420
let flowerDY = 490
let flowerDSize = 10

let flowerEX = 540
let flowerEY = 530
let flowerESize = 10


function preload() {
  title = loadFont('assets/Bubble Rainbow.ttf');
  name = loadFont('assets/Hellorain.ttf');
  img = loadImage("./assets/orange flower.png");
  for (let i = 0; i < 3; i++) {
    wateringcan=loadImage('./assets/watering-can.png')
}
  }



function setup() {

  createCanvas(600, 600);
  particles = [];
  angleMode(DEGREES);

  //background gradient colors
  c1 = color(0, 12, 120);
  c2 = color(245, 214, 140, 10);

}




function draw() {

  background(13, 117, 145);



  particles.push(new Particle());
  particles.forEach(runParticle);

  setGradient(0, 0, 600, 600, c1, c2, Y_AXIS);
  setGradient(0, 0, 600, 600, c2, c1, X_AXIS);

  flowerE();
  flowerD()
  flowerA();
  flowerB();
  flowerC();

image(wateringcan,mouseX,mouseY,100,70)


  //control the flowers' sizes in the end
  if (flowerASize < 150) {
    GrowingA();
  }
  if (flowerBSize < 150) {
    GrowingB()
  }
  if (flowerCSize < 150) {
    GrowingC()
  }
  if (flowerDSize < 150) {
    GrowingD()
  }
  if (flowerESize < 190) {
    GrowingE()
  }


  //run codes in particle.js
  function runParticle(p) {
    p.run();
    p.gravity();
    p.display();
    p.drawsplash();

  }

  //avoid overloading
  if (particles.length > 300) {
    particles.splice(0, 1);
  }

}


//gradient background
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0.3, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}



//------------flowerA

function GrowingA() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if ((p.x > flowerAX - flowerASize && p.x < flowerAX + flowerASize) &&
      (p.y > flowerAY - flowerASize && p.y < flowerAY + flowerASize)) {

      flowerASize += 0.07;
    }
  }
}

function flowerA() {

  push();
  fill(250, 228, 129,160);
  noStroke()

  translate(flowerAX, flowerAY);


  for (var a = 0; a < 12; a++) {

    if (particles.length < 400) {
      ellipse(9, flowerASize / 30,
        20 + flowerASize / 5, 55 + flowerASize);
    }
    rotate(30);
  }

  pop();
}




//-------------flowerB

function GrowingB() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if ((p.x > flowerBX - flowerBSize / 2 && p.x < flowerBX + flowerBSize) &&
      (p.y > flowerBY - flowerBSize / 2 && p.y < flowerBY + flowerBSize)) {

      flowerBSize += 0.06;
    }
  }
}

function flowerB() {

  push();
  fill(252, 194, 0, 160);
  translate(flowerBX, flowerBY);
  noStroke();

  for (var b = 0; b < 9; b++) {

    if (particles.length < 400) {
      ellipse(10, flowerBSize / 5,
        50 + flowerBSize / 5, 10 + flowerBSize);
    }

    rotate(40);
  }

  pop();
}




//------------flowerC

function GrowingC() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if ((p.x > flowerCX - flowerCSize && p.x < flowerCX + flowerCSize) &&
      (p.y > flowerCY - flowerCSize && p.y < flowerCY + flowerCSize)) {

      flowerCSize += 0.06;
    }
  }
}

function flowerC() {

  push();
  fill(255, 153, 51,100);
  translate(flowerCX, flowerCY);
  noStroke();

  for (var c = 0; c < 18; c++) {

    if (particles.length < 400) {
      ellipse(12, flowerCSize / 8,
        20 + flowerCSize / 4, 70 + flowerCSize);
    }

    rotate(20);
  }

  pop();
}




//------------flowerD

function GrowingD() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if ((p.x > flowerDX - flowerDSize && p.x < flowerDX + flowerDSize) &&
      (p.y > flowerDY - flowerDSize && p.y < flowerDY + flowerDSize)) {

      flowerDSize += 0.06;
    }
  }
}

function flowerD() {

  push()
  fill(255, 153, 102, 160);
  translate(flowerDX, flowerDY);
  noStroke();

  for (var d = 0; d < 8; d++) {

    if (particles.length < 400) {
      ellipse(10, flowerDSize / 3,
        40 + flowerDSize / 7, 20 + flowerDSize);
    }

    rotate(45);
  }

  pop();
}


//---------flowerE

function GrowingE() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    if ((p.x > flowerEX - flowerESize && p.x < flowerEX + flowerESize) &&
      (p.y > flowerEY - flowerESize && p.y < flowerEY + flowerESize)) {

      flowerESize += 0.07;
    }
  }
}

function flowerE() {

  push();
  fill(251, 159, 147,100);
  translate(flowerEX, flowerEY);
  noStroke();

  for (var e = 0; e < 12; e++) {

    if (particles.length < 400) {
      ellipse(5, flowerESize / 20,
        75 + flowerESize, 20 + flowerESize / 2);
    }

    rotate(30);
  }

  pop();

  fill( "#DDA0DD");
  textSize(size);
  strokeWeight(0);
  textFont(name);
  text("Rebecca Vann",425,585 );
  textSize(size*2);
  textFont(title)
  text("Growing Flowers",15,50);
}

//watering can
class Wateringcan {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;


  }
}
