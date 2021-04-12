const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,10);

	

	leftBar = new Dustbin(559,620,20,100);
	bottomBar = new Dustbin(610,660,100,20);
	rightBar = new Dustbin(670,620,20,100);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display();

  

  leftBar.display();
  bottomBar.display();
  rightBar.display();
  
  drawSprites();
 
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){ 
		Matter.body.applyForce(paper.body,paper.body.position,{x:15 , y:-15})
	}
}



