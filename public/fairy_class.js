class Fairy {

       constructor(fairy, x, y) {
           this.x = x;
           this.y = y;
           this.fairy = fairy;
           this.noiseX = random(500);
           this.noiseY = random(500);
           this.t = 0;
           this.scale = 0.6;
           this.newX = 0;
           this.newY = 0;
       }
       
       
       drawFairy() {   
        this.newX = this.x * noise(this.noiseX+this.t);
        this.newY = this.y * noise(this.noiseY+this.t)
         image(this.fairy, this.newX, this.newY, this.fairy.width * this.scale, this.fairy.height * this.scale);
        this.t += .001
       }

       checkCollision() {
       // print(dist(this.newX, this.newY, mouseX, mouseY));
        if (keyCode === (32) && dist(this.newX, this.newY, newAvi.x, newAvi.y) < 130) {
            stroke(255);
            fill(94, 113, 145);
            makeMessage(input.value(),this.newX + 20, this.newY - 110);}
            if (dist(this.newX, this.newY,  newAvi.x, newAvi.y) < 130) {
            image(darkfairy, this.newX, this.newY, this.fairy.width * this.scale, this.fairy.height * this.scale); }

        } 

       
       }
   
    
       
   