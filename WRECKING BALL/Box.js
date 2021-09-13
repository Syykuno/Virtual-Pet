class Box {
    constructor(x,y){
        var options = {
            isStatic: false,
            density:0.05,
            friction: 1,
            restitution:0.5

}
this.body = Bodies.rectangle(x,y,70,70,options)
this.width = 70;
this.height = 70;
World.add(world,this.body);
    }
    display(){
var pos =this.body.position
push();
translate(pos.x,pos.y)
rotate(this.body.angle)
rectMode(CENTER);
strokeWeight(4);
stroke("black")
fill("green")
rect(0,0,this.width,this.height)
pop();
    }
}