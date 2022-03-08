
class Particle {
  constructor() {
    //this.particle=[]
    this.x = mouseX;
    this.y = mouseY;
    this.xspeed = random(-3, 2);
    this.yspeed = random(1, 1);
    this.length=random(3,20)



    this.r = 0;
    this.opacity = 130;
  }


  run() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  gravity() {
    this.yspeed += 0.06;
  }

  display() {
    noStroke();
    fill(255,120);
    ellipse(this.x, this.y, 1.7,this.length );
     if (this.y > 540) {
      this.length = this.length - 10;
    }

    if (this.length < 0) {
    this.length=0;
    }
  }

  drawsplash(){

  strokeWeight(2);

    stroke(245, this.opacity);
    noFill();


    if (this.y > 550) {
      ellipse(this.x, 550, this.r * 2 , this.r/2.5 );
      this.r++;
      this.opacity = this.opacity - 9;
}
}


}
