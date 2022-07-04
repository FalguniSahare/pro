var fighter
var zombies
var bullets
var logofwood
var road
var fighterAnimation
var zombiesAnimation
var bulletsAnimation
var logofwoodAnimation
var roadAnimation



function preload(){

  fighterAnimation = loadAnimation("Fighter1.png","Fighter2.png","Fighter3.png");
  zombiesAnimation = loadAnimation("Zombie1.png","Zombie2.png","Zombie3.png");
  bulletsAnimation = loadImage("Bullet.png");
  logofwoodAnimation = loadImage("log of wood.png");
  roadAnimation = loadImage("track.png");
}
function setup() {
  createCanvas(800,400);

  fighter = createSprite(100,50,50,50)
  fighter.addAnimation("running",fighter_running);

  fighter.scale = 0.5;
 fighter.x = 50;

 road = createSprite(400,100,50,50);
  road.addImage("roadAnimation");
  road.x = road.width /2;
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(220);  
  road.velocityX = -2
  console.log(road.x)

  if (road.x<0){
    road.x = road.width/2;
  }
  
  fighter.velocityY = fighter.velocityY + 0.8
  
 
 //stop trex from falling down 
  fighter.collide(ground);

  drawSprites();
}
  
