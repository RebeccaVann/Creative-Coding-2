var path, fish, cash, diamonds, jwellery, sword;
var pathImg, fishImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var mouseX;
var coins;
var score = 0;
var size1 = 25;
var size2 = 70;



function preload() {
  name = loadFont("assets/Hellorain.ttf");
  pathImg = loadImage("assets/road.png");
  fishImg = loadAnimation("assets/runner1.png",
  "assets/runner2.png",
  "assets/runner3.png",
  "assets/runner4.png",
  "assets/runner5.png",
  "assets/runner6.png",
  "assets/runner7.png",
  "assets/runner8.png",
  "assets/runner9.png",
  "assets/runner10.png");

  endImg = loadAnimation("assets/gameOver.png");
}

function setup() {


  createCanvas(400, 550);


  // Moving background
  path = createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating fish running
  fish = createSprite(70,330,20,20);
  fish.addAnimation("running", fishImg);
  fish.scale = 0.2;

  coins = new Group();
    for (var i = 0; i < 10; i++) {
      var c = createSprite(
        random(100, width-100),
        random(100, height-100),
        10, 10);
      c.shapeColor = color(255, 255, 0);
      coins.add(c);
    }


}

function draw() {

  background(0);
  fish.velocity.x =
   (mouseX-fish.position.x)*0.08;
 fish.velocity.y =
   (mouseY-fish.position.y)*0.08;
    fish.overlap(coins, getCoin);


  //code to reset the background
  if (path.y > 400) {
    path.y = height / 2;
  }


      fish.addAnimation("running");
      fish.x = 200;
      fish.y = 300;
      fish.scale = 0.2;

      path.velocityY = 0;

      drawSprites();


textSize(size2);
fill(255);
 noStroke();
 textSize(size2);
 textAlign(CENTER, CENTER);
 if (coins.length > 0) {
   text(score, width/2, height/2);
 }
 else {
   text("you win!", width/2, height/2);
 }


    function getCoin(fish, coin) {
      coin.remove();
      score += 1;
    }

    textSize(size1);
    strokeWeight(0);
    textFont(name);
    text("Rebecca Vann",300,520 );
  }
