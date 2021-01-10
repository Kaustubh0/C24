
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,290,1200,20);

	box1 = new Dustbin(800,275,200,20);
	box2 = new Dustbin(700,235,20,100);
	box3 = new Dustbin(900,235,20,100);

	paperBall = new Paper(200,275,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display()
  box2.display()
  box3.display()

  ground.display()

  paperBall.display()
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:25,y:-25})
	}
}