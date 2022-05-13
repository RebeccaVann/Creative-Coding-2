var path, fish, cash, diamonds, jewels, sword;
var pathImg, fishImg, cashImg, diamondsImg, jewelsImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jewelsG, swordGroup;
var mouseX;


//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
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
  cashImg = loadImage("assets/cash.png");
  diamondsImg = loadImage("assets/diamonds.png");
  jewelsImg = loadImage("assets/jwell.png");
  swordImg = loadImage("assets/sword.png");
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


  cashG = new Group();
  diamondsG = new Group();
  jewelsG = new Group();
  swordGroup = new Group();

}

function draw() {

  background(0);
  fish.velocity.x =
   (mouseX-fish.position.x)*0.1;
 fish.velocity.y =
   (mouseY-fish.position.y)*0.1;


  //code to reset the background
  if (path.y > 400) {
    path.y = height / 2;
  }

  createCash();
  createDiamonds();
  createjewels();
  createSword();
  if(cashG.collide(fish))
  {
    cashG.destroyEach();
    treasureCollection = treasureCollection + 50;
  } else if (diamondsG.collide(fish)) {
    diamondsG.destroyEach();
    treasureCollection = treasureCollection + 100;

  } else if (jewelsG.collide(fish)) {
    jewelsG.destroyEach();
    treasureCollection = treasureCollection + 150;

  } else {
    if (swordGroup.collide(fish)) {
      gameState = END;

      fish.addAnimation("running", endImg);
      fish.x = 200;
      fish.y = 300;
      fish.scale = 0.6;

      path.velocityY = 0;

      cashG.destroyEach();
      diamondsG.destroyEach();
      jewelsG.destroyEach();
      swordGroup.destroyEach();

      cashG.setVelocityYEach(0);
      diamondsG.setVelocityYEach(0);
      jewelsG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);

    }
  }



  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: " + treasureCollection, 150, 30);

}

function createCash() {
  if (frameCount % 50 == 0) {
    var cash = createSprite(Math.round(random(50, windowWidth -50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.08;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (frameCount % 80 == 0) {
    var diamonds = createSprite(Math.round(random(50, windowWidth-50), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.08;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
}

function createjewels() {
  if (frameCount % 80 == 0) {
    var jewels = createSprite(Math.round(random(50, windowWidth-50), 40, 10, 10));
    jewels.addImage(jewelsImg);
    jewels.scale = 0.08;
    jewels.velocityY = 3;
    jewels.lifetime = 150;
    jewelsG.add(jewels);
  }
}

function createSword() {
  if (frameCount % 150 == 0) {
    var sword = createSprite(Math.round(random(50, windowWidth-50), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.2;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
  }
}
