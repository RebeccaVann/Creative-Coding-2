var butterfly;
var result, runresult, runresultleft;
var web;
const moves = [];
var health = 100;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterfly.txt');
  runresultleft = loadStrings('assets/characterflyleft.txt');


}

function setup() {
    createCanvas(800,600);
    butterfly = createSprite(300, 250);
    butterfly.addAnimation('idle', result[0], result[result.length-1]);
    butterfly.addAnimation('fly', runresult[0], runresult[runresult.length-1]);
    butterfly.addAnimation('left', runresultleft[0], runresultleft[runresultleft.length-1]);


    web = createSprite(400, 300);
    //compact way to add an image
    web.addImage(loadImage('assets/web.png'));
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('right'))
    {
      butterfly.changeAnimation('fly');
      butterfly.velocity.x += .5;
      if(web != null)
      {
        if(butterfly.collide(web))
        {
          butterfly.changeAnimation('idle');
        }
      }

    }
    else if(keyDown('left'))
    {
      butterfly.changeAnimation('left');
      butterfly.velocity.x -= .5;
      if(web != null)
      {
        if(butterfly.collide(web))
        {
          butterfly.changeAnimation('idle');
        }
      }

    }

    else
    {
      butterfly.changeAnimation('idle');
      butterfly.velocity.x = 0;
    }

    butterfly.debug = mouseIsPressed;

    drawSprites();
}

function createmoves(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new move(x,y);
    moves.push(p);
  }
  for (let i = moves.length - 1; i >= 0; i--) {
    moves[i].update();
    moves[i].show();
    if (moves[i].finished()) {
      // remove this move
      moves.splice(i, 1);
    }
  }
}
