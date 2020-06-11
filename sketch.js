var player;
var ground;
var canvas;

function preload(){
  playerImg = loadImage("images/download.jpg");
  player1Img = loadImage("images/kick.jpg");
  player2Img = loadImage("images/punch.jpg");
  player3Img = loadImage("images/punch1.jpg");

}
function setup() {
  canvas = createCanvas(1000,500);
  player = createSprite(100,300,20,20);
  ground = createSprite(500,470,width,20);
  rightWall = createSprite(995,210,20,height);
  rightWall.shapeColor = "black";
  leftWall = createSprite(5,210,20,height);
  leftWall.shapeColor = "black";
}

function draw() {
  background(0);

  player.velocityY = 0;   
  player.scale = 0.5;
  player.collide(ground);
  player.collide(rightWall);
  player.collide(leftWall);
  player.velocityY =  player.velocityY + 5;

  if(keyDown("space")){
    player.velocityY =  player.velocityY - 6;
  }

  if(keyDown("up")){
    player.velocityX = 3;
  }
 
  else{
    player.velocityX = 0;
  }
  if(keyDown("down")){
    player.velocityX = -3;
  }
  if(keyDown("w")){
    player.addImage(player1Img);
  }
 else{
    player.addImage(playerImg);
  }
  if(keyDown("d")){
    player.addImage(player2Img);
  }
  if(keyDown("a")){
    player.addImage(player3Img);
  }



  textSize(15);
  text("press 'up' and 'down' to move the ninja left and right",200,100);
  text("press 'w','d', 'a' to attack",200,130);
  text("press space to fly",200,160);
  drawSprites();
  }
