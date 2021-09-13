class Constraint{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
pointB:pointB,
stiffness:0.4,
length:250
}
this.body=Constraint.create(options);
World.add(world,this.Constraint)
    }
}