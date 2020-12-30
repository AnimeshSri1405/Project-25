
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db,dbImg;
function preload(){

dbImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(700,600,1400,100)
block1=new Dustbin(1005,440,20,210);

block2=new Dustbin(1090,543,190,15);
db=createSprite(1090,440,10,100);
db.addImage(dbImg);
db.scale=0.7

block3=new Dustbin(1175,440,20,210);


ball=new Paper(50,530,70);

//World.add(world,ball);
//block2=new Dustbin()

	Engine.run(engine);
 
}

function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  //block1.collide(ground);
  ball.display();
 //keyPressed();
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:1110,y:-1110})
  }
 
}



