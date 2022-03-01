function setup() {
  createCanvas(500, 600);
  }

  function draw() {
  colorMode(RGB);
  background(255, 228, 196);


  stroke(0);

  //Spines
  line(325, 300, 250, 240);
  line(325, 300, 280, 215);
  line(325, 300, 325, 205);
  line(325, 300, 375, 215);
  line(325, 300, 400, 240);

  //Cactus

  fill(60, 179, 113);
  rect(250, 225, 150, 400, 80, 80, 5, 5);

  fill(102, 205, 170);
  rect(300, 225, 50, 400, 25, 25, 0, 5);

  //pot
  fill(240, 128, 128);
  quad(200, 500, 450, 500, 425, 600, 225, 600)

  fill(205, 92, 92);
  quad(375, 500, 450, 500, 425, 600, 300, 600);

  //sun
fill(255,186,41)
ellipse(120, 120, 180, 180);
}
