let myModel;
let myTexture;
let obj;
var rotateSpeed = .01;
var pineappleX = 10;
var pineappleY = 10;
let s = 0.003;

var pineappleX2 = 200;
var pineappleY2 = 200;
var myModelObject;
function preload()
{
    myModel = loadModel("./assets/pineapple.obj");
    myTexture = loadImage("./assets/pineapple.jpg");
    obj = loadModel('./assets/model.obj');
}
// this function is called only once
function setup()
{
    createCanvas(1080,768, WEBGL);
    myModelObject = new modelClass(pineappleX, pineappleY, rotateSpeed, myModel, myTexture);
    angleMode(DEGREES);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(20);

    myModelObject.draw();

//model2
  

  rotateZ(frameCount * s);
  rotateX(frameCount * s);
  rotateY(frameCount * s);

  scale(width * 0.015);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  normalMaterial();

  model(obj);


function mousePressed()
{
    rotateSpeed += .5;
    myModelObject.updateSpeed(rotateSpeed);
    console.log(rotateSpeed);
}

function mouseReleased()
{
    rotateSpeed -= .5;
    myModelObject.updateSpeed(rotateSpeed);
}

function mouseDragged()
{
    pineappleX = mouseX-width/2;
    pineappleY = mouseY-height/2;
    myModelObject.updateX(pineappleX);
    myModelObject.updateY(pineappleY);
   // console.log(pineappleX);
}
}
