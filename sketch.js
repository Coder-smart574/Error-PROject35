var backgroundIMG;
var ballon, balloonIMG;

function preload(){
  backgroundIMG=loadImage("background.png")
  balloonIMG=loadImage("balloon.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  database=firebase.database();
  ballon=createSprite(window.innerWidth/2,610, 5, 5);
  ballon.addImage("ballon",balloonIMG);
    
}

function draw() {
  background(backgroundIMG);  
  //drawSprites();
}