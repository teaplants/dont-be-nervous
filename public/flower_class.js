class Flower {

    constructor(an, x, y, s) {
        this.x = x;
        this.y = y;
        this.an = an;
        this.scale = s;
    }
    
    
    drawFlower() {

    }

  animateFlower(){
      
    animation(this.an, this.x, this.y, this.an.getWidth()* this.scale, this.an.getHeight()* this.scale);
    }

    checkCollision(avi) {
      //detect avi - big flower collision

  if (dist(this.x, this.y, avi.x, avi.y) < 300) {
        fill (0);
        stroke(255);
        text ("to the graveyard", this.x - 300, this.y - 100);
      } 
      
  if (keyCode === (32) && dist(this.x, this.y, avi.x, avi.y) < 300) {
  console.log('TEST');
  newAvi.x = -4000;
  newAvi.y = -4000;
} 

    }

}
    
