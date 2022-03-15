var mushroomObjects;
var result, runresult, runresultleft, jumpresult;
var web;
const particles = [];
var health = 100;

//
var rainDrops;
var names = [];
var size = 25
var img;
var wateringcan;
var x;
var y;
var imagesToDisplay = [];
//var imageClassObject;
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
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');

}

function setup() {
    createCanvas(800,600);
    mushroomObjects = createSprite(300, 500);
    mushroomObjects.addAnimation('idle', result[0], result[result.length-1]);
    mushroomObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    mushroomObjects.addAnimation('left', runresultleft[0], runresultleft[runresultleft.length-1]);
    mushroomObjects.addAnimation('jump', jumpresult[0], jumpresult[jumpresult.length-1]);

    web = createSprite(700, 400);
    //compact way to add an image
    web.addImage(loadImage('assets/web.png'));
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('d'))
    {
      mushroomObjects.changeAnimation('run');
      mushroomObjects.velocity.x += .5;
      if(web != null)
      {
        if(mushroomObjects.collide(web))
        {
          mushroomObjects.changeAnimation('idle');
        }
      }

    }
    else if(keyDown('a'))
    {
      mushroomObjects.changeAnimation('left');
      mushroomObjects.velocity.x -= .5;
      if(web != null)
      {
        if(mushroomObjects.collide(web))
        {
          mushroomObjects.changeAnimation('idle');
        }
      }

    }
    else if(keyDown('w'))
    {
      mushroomObjects.changeAnimation('jump');

      if(web != null)
      {
        if(dist(mushroomObjects.position.x,mushroomObjects.position.y,web.position.x,web.position.y) < 250)
        {
          createParticles(web.position.x, web.position.y);
          health -= 1;
          if(health <= 0)
          {
            web.remove();
            web = null;
            fill( "#DDA0DD");
            textSize(size);
            strokeWeight(0);
            textFont(name);
            text("You Win!",250,300 );
          }

        }
      }


    }
    else
    {
      mushroomObjects.changeAnimation('idle');
      mushroomObjects.velocity.x = 0;
    }

    mushroomObjects.debug = mouseIsPressed;

    drawSprites();
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}
