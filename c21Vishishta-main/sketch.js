var fixedRect, movingRect, box1,box2,box3,box4;

function setup() {
  createCanvas(1200,800);
  box1=createSprite(200,200,50,50);
  box2=createSprite(300,200,50,50);
  box3=createSprite(400,200,50,50);
  box4=createSprite(500,200,50,50);
  box1.shapeColor="brown";
  box2.shapeColor="pink";
  box3.shapeColor="red";
  box4.shapeColor="yellow";
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; //collider radius
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1.debug= true;
  box2.debug=true;
  box3.debug=true;
  box4.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //calling
  if(myisTouching(movingRect,box3))
  {
    box3.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  else{
    box3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}

//declare 
function myisTouching(box1,box2)
{
  if (box1.x - box2.x < box1.width/2 + box2.width/2
    && box2.x - box1.x < box2.width/2 + box1.width/2
    && box1.y - box2.y < box2.height/2 + box1.height/2
    && box2.y - box1.y < box2.height/2 + box1.height/2) {
 
      return true
}
else 
{

return false

}
}