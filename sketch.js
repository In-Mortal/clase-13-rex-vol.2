
var trex ,trex_running;
var ground ,groundimg;
var sueloInvisble;
var cloudImage;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");  
groundimg = loadImage("ground2.png");
cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
 
  trex = createSprite(150,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground = createSprite(120,160);
 ground.addImage(groundimg);
ground.velocityX = -3;
sueloInvisible = createSprite(200,190,400,10);
sueloInvisible.visible = false;
}

function draw(){
  background("white")

if(keyDown("space") && trex.y >= 150) {
 trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.5;

  if(ground.x < 0){
    ground.x = ground.width/2;
  } 
 trex.collide(sueloInvisible); 
nubesInicia(); 
drawSprites();
}

function nubesInicia(){
  if(frameCount %60 == 0){
    var nube = createSprite(600,60);
    nube.addImage(cloudImage);
    nube.y = Math.round(random(10,60));
    nube.velocityX = -10;
    nube.scale = 0.5;
  }
 
}
