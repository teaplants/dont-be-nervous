var socket = io();
var arenaWidth = 5000;
var arenaHeight = 5000;
var newAvi, otherAvi;
var otherData = {
  x: 700,
  y: 10
};
var flower1, flower2, flower3, flower4;
var newFairy;
var flowerAnimation, flower2Animation, flower3Animation, shroomAnimation;
var counter;
var input;
let fields = [];
let flowers = [];
let fairies = [];
let messages = [];
let otherText = [];
let graveyard;
let space;


function preload(){
  flowerAnimation = loadAnimation("assets/flowerAn/1.png", "assets/flowerAn/2.png", "assets/flowerAn/3.png", "assets/flowerAn/4.png", "assets/flowerAn/5.png");
  shroomAnimation = loadAnimation("assets/shroomAn/shroom1copy.png", "assets/shroomAn/shroom2copy.png", "assets/shroomAn/shroom3copy.png", "assets/shroomAn/shroom4copy.png", "assets/shroomAn/shroom5copy.png");
  flower2Animation = loadAnimation("assets/flower2An/boss1copy.png", "assets/flower2An/boss2copy.png", "assets/flower2An/boss3copy.png", "assets/flower2An/boss4copy.png", "assets/flower2An/boss5copy.png"); 
  flower3Animation = loadAnimation("assets/flower3An/1.png", "assets/flower3An/2.png", "assets/flower3An/3.png", "assets/flower3An/4.png", "assets/flower3An/5.png", "assets/flower3An/6.png", "assets/flower3An/7.png", "assets/flower3An/8.png", "assets/flower3An/9.png");
  bluedude = loadImage('assets/bluedude.png');
  bossflower = loadImage('assets/bossflower.png');
  note = loadImage('assets/note2.png');
  note2 = loadImage('assets/thanks.png');
  note3 = loadImage('assets/heart.png');
  note4 = loadImage('assets/heart2.png');
  note5 = loadImage('assets/dark.png');
  note6 = loadImage('assets/fri.png');
  note7 = loadImage('assets/hope.png');
  note8 = loadImage('assets/love.png');
  note9 = loadImage('assets/vast.png');
  note10 = loadImage('assets/land.png');
  note11 = loadImage('assets/walk.png');
  note12 = loadImage('assets/wat.png');
  note13 = loadImage('assets/wat2.png');
  note14 = loadImage('assets/sandbox.png');
  note15 = loadImage('assets/lone.png');
  arrow = loadImage('assets/arrow2.png');
  home = loadImage('assets/home.png');
  fairyImg = loadImage('assets/fairy/fairy1.png');
  darkfairy = loadImage('assets/fairy/light.png');
  fairy2 = loadImage('assets/fairy/fairy2.png');
  light = loadImage('assets/fairy/light2.png');
  graveyard = loadSound('assets/sound/graveyard.m4a')
  space = loadSound('assets/sound/space.m4a')
}

function setup(){
    createCanvas(1680, 945);
    imageMode(CENTER);
    stroke(255);
    textFont('Courier');
      socket.on('mouse', function(data){
      otherData.x = data.x;
      otherData.y = data.y;
    });

    socket.on('input', function (newText) {
      otherText = newText;
    });
  

   for (let i=0; i < 2000; i++) {
    fields[i] = new Field(random(-5000, 5000), random(-5000, 5000));
}

for (let i=0; i < 220; i++) {
  fields[i] = new Field(random(-4500, -3500), random(-4500, -3500));
}

    newAvi = new Avi(665, 10);
    flower1 = new Flower(flower3Animation, 1200, -1000, 0.5);
    flower2 = new Flower(flowerAnimation, 100, 900);
    flower3 = new Flower(flower2Animation, 0, 2500, 0.5);
    flower4 = new Flower(shroomAnimation, 1300, 3500, 0.5);
    flower5 = new Flower(flower3Animation, -1000, 1000, 0.5);
    flower6 = new Flower(flowerAnimation, -2100, 0, 0.5);
    flower7 = new Flower(shroomAnimation, 3000, -3000, 0.5);
    flower8 = new Flower(flower2Animation, -3000, -2000, 0.5);
    flower9 = new Flower(flower2Animation, 0, 2500, 0.5);
    flower10 =  new Flower(shroomAnimation, -1000, -1200, 0.5);
    flower11 =  new Flower(flower2Animation, 600, -3500, 0.5);
    flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9, flower10, flower11];
    
    for (var i = 0 ; i<15; i++){
      fairies.push(new Fairy(fairyImg, random(-4000, 4000), random(-4000, 4000)));
    }

  input = createInput();
  input.position(windowWidth-150, windowHeight-30);

  if (keyCode === (32)) {
    graveyard.play();
  }

}

function draw() {
background(234);
camera.position.x = newAvi.x;
camera.position.y = newAvi.y;

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

for (let field of fields) {
  field.drawField();
  }

image(home, 665, 0, width/7, height/5);
image(note, 350, 0, width/4, height/4);

for (let newMessage of otherText){ 
  text(newMessage.message, newMessage.x, newMessage.y);
}

for (let message of messages){ 
  text(message.message, message.x, message.y);
  }

newAvi.drawAvi();
newAvi.moveAvi();
image(fairy2, -4000, random(-4200, -4202),  width/12, height/4.5);


for (fairy of fairies) {
  fairy.drawFairy();
  fairy.checkCollision();
}

newDrawing(otherData);


for (flower of flowers){
  flower.drawFlower();
  flower.animateFlower();
  flower.checkCollision(newAvi);
}

if (dist(newAvi.x, newAvi.y, -4000, random(-4200, -4202)) < 150) {
  image(light, -4000, random(-4200, -4202), width/12, height/4.5);
  }


if (keyIsDown(ENTER)) {
  makeMessage(input.value(), newAvi.x + 30, newAvi.y - 30);
}

counter1 = (newAvi.x + ","); counter2 =  (newAvi.y);
text(counter1, newAvi.x + 700, newAvi.y + 410);
text(counter2, newAvi.x + 740, newAvi.y + 410);

var data = {
  x: newAvi.x,
  y: newAvi.y
}

if (dist(newAvi.x, newAvi.y, -4000, -4200) > 1300){
  graveyard.stop();
}
 //sending
socket.emit ('mouse', data);

 socket.emit('input', messages);
 
}

function makeMessage(message, x, y) {
  let newMessage = {
    message: message,
    x: x - 5,
    y: y - 50
  }
  messages.push(newMessage);
}


function newDrawing(data){
  image(fairyImg, data.x, data.y,  width / 13, height / 4.2);
  
}


  function keyPressed() {
    if (keyCode === 32 && dist(newAvi.x, newAvi.y, -4000, -4200) < 150) {
      space.stop();
      graveyard.play();
    }
    if (keyCode === 32) {
      space.play();
        }

        if (keyIsPressed == false && dist(data.x, data.y, newAvi.x, newAvi.y) < 300) { 
          space.play();
  }
}