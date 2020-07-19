var PLAY = 1;
var END = 2;
var gameState = 1;


var bananaImage,obstacleImage,obstacleGroup,Player,Back,Floor,obstacle;



function preload(){
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");  
  player = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_07.png","Monkey_08.png"),"Monkey_09.png","Monkey_10.png";
  back = loadImage("Background.jpg");
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  Back = createSprite(300,150,600,300);
  Back.addImage("back",back);
  Back.scale = 0.7;
  Back.velocityX = -3;
  

  Player = createSprite(50,230,20,20);
  Player.addAnimation("Player",player);
  Player.scale = 0.1;
 // Player.debug = true;

  
  
  Floor = createSprite(300,287,600,10);
  Floor.visible = false;
 // Floor.debug = true;
  
}  


function draw(){
 background("red"); 
  
  Player.collide(Floor);
  
  if(gameState === PLAY){
  
  if(keyDown("space")&& Player.y > 251) {
    Player.velocityY = -14;
  }

//console.log(Player.y);
  
  if (Back.x < 0){
    Back.x = Back.width/3;
  }
  
    if(Player.isTouching(obstacle)){
      //obstacle.velocityX = 0;
     // gameState = 2;
    }
    
  Player.velocityY = Player.velocityY + 0.8;
  
  spawnObstacles();
  }
  drawSprites();
}

function spawnObstacles(){

if(frameCount % 100 === 0) {
    obstacle = createSprite(600,268,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage("Obstacle",obstacleImage);
    
              
    obstacle.scale = 0.1;
  // obstacleGroup.add(obstacle);
    //obstacle.lifetime = 300;
    
   

}
}