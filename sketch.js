var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,invisibleGround
var FoodGroup, obstacleGroup
var score
var Survial
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running )
  monkey.scale=0.1

  ground = createSprite(400,390,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
   
  console.log(ground.x)
  fruitGroup=createGroup();
 obstaceGroup=createGroup();
score=0; 
  Survial=0;
}
function draw() {
background("white");
  if(gameState === PLAY){
    
 
  invisibleGround = createSprite(200,395,400,10);
  invisibleGround.visible = false;
  if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
    
  
       monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround);
  fruit();
  obstaces();
    
      Survial = Survial + Math.round(frameCount/100);
    if (fruitGroup.isTouching(monkey)){
    fruitGroup.destroyEach();
    score=score+5
  }


else  {
    
      if(obstaceGroup.isTouching(monkey)){
        gameState=END;
        
        fruitGroup.destroyEach();
        
        fruitGroup.setVelocityXEach(0);
        obstaceGroup.setVelocityXEach(0);
     
      Survial = Survial + Math.round(frameCount/100);
   
  
      }
  
  }
  }
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(invisibleGround);
  drawSprites(); 
   text("Score : "+ score,170,30); 
text("Survial Time : "+ Survial,280,30);
}

function fruit(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
      banana.addAnimation("banana",bananaImage);
     banana.velocityX=-(8 + score/25);
    banana.scale=0.14
    banana.y=Math.round(random(0,400));
   
    banana.setLifetime=300;
 fruitGroup.add(banana)
}
}
function obstaces(){
  if(World.frameCount%60===0){
    obstace=createSprite(400,360,0,0);
      obstace.velocityX=-(8 + score/25);
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstace.addImage(obstaceImage);
    case 2: obstace.addImage(obstaceImage);
    }
     obstace.scale=0.14
   
    obstace.setLifetime=300;
    obstaceGroup.add(obstace)
  }
}


