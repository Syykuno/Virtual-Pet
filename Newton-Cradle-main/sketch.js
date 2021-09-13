
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2, bob3, bob4,bob5, chain, chain2, chain3, chain4, chain5, roof

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(350,400,50)
	bob2=new Bob(400,400,50)
	bob3=new Bob(450,400,50)
	bob4=new Bob(500,400,50)
	bob5=new Bob(550,400,50)
	chain=new Chain(bob1.body,{x:350,y:100})
	chain2=new Chain(bob2.body,{x:400,y:100})
	chain3=new Chain(bob3.body,{x:450,y:100})
	chain4=new Chain(bob4.body,{x:500,y:100})
	chain5=new Chain(bob5.body,{x:550,y:100})
	roof=new Roof(450,100,300,20)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(240,128,128));

  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});

  
	}
}

 
 



