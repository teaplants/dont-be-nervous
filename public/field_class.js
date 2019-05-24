class Field {

    constructor(xpos, ypos) {
        this.fieldImage1 = loadImage('assets/f4.png');
        this.fieldImage2 = loadImage('assets/f1.png');
        this.fieldImage3 = loadImage('assets/f15.png');
        this.x = xpos;
        this.y = ypos;
        
    }
    
    
    drawField() {
        image(this.fieldImage1, this.x, this.y, width/20, height/10);
        image(this.fieldImage2, this.x + 400, this.y + 400, width/20, height/10);
        image(this.fieldImage3, this.x - 400, this.y - 400, width/20, height/10);
    }

  animateField(){
        //animation(flowerAnimation, this.x, this.y);
    }

}