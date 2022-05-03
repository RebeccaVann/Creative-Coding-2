function preload() {
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

let angle = 0;
function update() {

  angle += deltaTime * .008;
}

function draw() {
  update();
  background("#000");


  draw_demo();
}

function draw_demo() {
  for (let i = 0; i < 8; i++) {
    fill(255, i * 20, i * 20);
    xx = Math.sin((angle - i) * .5) * 100;
    yy = Math.cos((angle - i) * .3) * 100;
    ellipse(windowWidth / 2 + xx, windowHeight / 2 + yy, 30 + i * 4, 30 + i * 4);
  }
}
