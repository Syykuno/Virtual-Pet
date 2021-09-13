const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world, body1
var box1;


function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //one world automatically creates
  world = engine.world;

  var options = {
    isStatic: true
  }
  body1 = Bodies.rectangle(200,380,400,20,options);
  World.add(world,body1)
var options1 ={
  restitution:1.5
}
  console.log(body1);
  box1 = Bodies.circle(100,100,20,options1);
  World.add(world,box1)
  console.log(box1)

}

function draw() {
  background("yellow");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(body1.position.x,body1.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(box1.position.x,box1.position.y,20,20)

  text(mouseX + "," + mouseY,mouseX,mouseY);
 
}