var bananaImage

var monkey_running, monkey

var obstacleGroup, obstacleImage

var background1, backgroundImage

var score

function preload(){
  backgroundImage = loadImage("jungle.jpg");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  background1 = createSprite(200,200,400,400);
}

function draw() {
  background(220);
  
  drawSprites();
}