
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,600);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
 
 ground = createSprite(400,350,570,20);
 ground.velocityX = -4;
 ground.x = ground.width/2;
  
 ground = createSprite(400,350,900,20);
  

  
 bananaGroup = createGroup();
 obstacleGroup = createGroup();
  
  
}


function draw() {
  
background(255);
  
  console.log("hi");
  
  //reset the ground
   if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
if(keyDown("space") && monkey.y >= 159) {
   monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //prevent monkey from falling down
  
  
   monkey.collide(ground); 
  
  spawnFood();
  spawObstacles();
  
  stroke ("black");
  textSize (20);
  fill ("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  drawSprites();
  
}

function spawnFood() {
  
if (frameCount % 80 === 0) {
 banana = createSprite(300,200,10,50);
 banana.y = Math.round(random(120,200));
 banana.addImage(bananaImage,"banana.png");
 banana.velocityX = -4;
 banana.scale = 0.05; 
  
 banana.lifetime = 75;
  
 bananaGroup.add(banana);
}
}
  
  
function spawObstacles() {
  
if (frameCount % 300 === 0) {
 obstacle = createSprite(200,312,50,40);
 obstacle.addImage(obstacleImage,"obstacle.png");
 obstacle.velocityX = -4; 
 obstacle.scale = 0.15;

  
 obstacle.lifetime = 75;
  
 obstacleGroup.add(obstacle);
}
}

