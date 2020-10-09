var tower,towerImage;
var climberImage,ghost,ghostJumpingImage,ghostStandingImage;
var spookySound,towerImage;
var door,doorImage,doorsGroup;
var ghost,ghostImage;
var gameState = PLAY
var PLAY = 1
var END = 0

function preload(){
   
  ghostImage = loadImage("ghost-standing.png")
  towerImage = loadImage("tower.png")
  spookySound = loadSound("spooky.wav")
  climberImage = loadImage("climber.png")
  doorImage = loadImage("door.png")
}

function setup(){
   createCanvas(600,600)
  tower = createSprite(300,300)
  tower.addImage(towerImage);
  tower.velocityY = 2
  
  ghost = createSprite(300,300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.5
  
  
  
  doorsGroup = createGroup();
  




}

function draw(){
 background("white")

 
  
  if(gameState==PLAY){
   
    spawnDoors();
    
    if(keyDown("space")){
  ghost.velocityY = -4  
}
  
  ghost.y = ghost.y + 2
  
  
  if(tower.y>400){
   tower.y = 300
  }  
  
  if(ghost.isTouching(doorsGroup)){
   gameState =END  
     
     
}
    
     
}else if(gameState==END){
         
   tower.velocityY =0         
   text("gameOver")

}
  
  
  
  
  
 console.log(ghost.y) 
  
  drawSprites();
}

function spawnDoors(){
  
 
 if(frameCount %100==0){ 
 door = createSprite(400,20) 
 climber = createSprite(400,80)
 door.addImage(doorImage)
 climber.addImage(climberImage)
 door.x = Math.round(random(150,450)) 
 climber.x = door.x
 door.velocityY = 4 
 climber.velocityY = 4
 doorsGroup.add(door) 
 
 }  
}



