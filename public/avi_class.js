
class Avi {

constructor(xpos, ypos) {
    this.aviImage = loadImage('assets/bluedude.png');
    this.rightImage = loadImage('assets/rightdude.png');
    this.backImage = loadImage('assets/backdude.png');
    this.leftImage = loadImage('assets/leftdude.png');
    this.x = xpos;
    this.y = ypos;
    
}


drawAvi() {

    if (keyCode === (32) && dist(this.x, this.y, -4000, random(-4200, -4202)) < 150 || dist(mouseX, mouseY, -4000, random(-4200, -4202)) < 150) {
        image(note10, -4500, -3800, width/4, height/5);
        image(note2, -4670, -3670, width/5, height/5);
        image(note3, -3900, -4300, width/4, height/4);
        image(note4, -3800, -4050, width/5, height/5);
        image(note5, -3400, -3900, width/5, height/5);
        image(note6, -4000, -3700, width/4, height/2);
        image(note7, -3500, -3700, width/3, height/3);
        image(note8, -3500, -4100, width/5, height/10);
        image(note9, -4400, -4000, width/4, height/4);
        image(note14, -4600, -4200, width/4, height/5);
        image(note11, -4000, -4000, width/4, height/6);
        image(note12, -3500, -4300, width/4, height/10);
        image(note13, -4500, -4400, width/4, height/8);
        image(note4, -4400, -4300, width/10, height/10);
        image(note15, -3800, -3800, width/6, height/9);
        }


    if (keyIsPressed == false) { 
        image(this.aviImage, this.x, this.y, width/20, height/9);}
    

}

moveAvi() {

    if (keyIsDown(LEFT_ARROW)) {
        this.x  = this.x -9 ;
        image(this.leftImage, this.x, this.y, width/20, height/9);

    } else

    if (keyIsDown(RIGHT_ARROW)) {
        this.x = this.x + 9;
        image(this.rightImage, this.x, this.y, width/20, height/9);

    } else

    if (keyIsDown(UP_ARROW)) {
        this.y = this.y -9 ;
        image(this.backImage, this.x, this.y, width/20, height/9);

    } else

    if (keyIsDown(DOWN_ARROW)) {
        this.y = this.y +9;
        image(this.aviImage, this.x, this.y, width/20, height/9);

    } 

    if(this.x < -5000)
    this.x = -5000;
  if(this.y < -5000)
    this.y = -5000;
  if(this.x > arenaWidth)
    (this.x = arenaWidth);
  if(this.y > arenaHeight)
    this.y = arenaHeight;
    
}

}