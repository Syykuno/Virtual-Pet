var bo1,bo2,bo3,bo4,bo5,bo6,bo7,bo8,bo9,bo10,bo11,boinv
var diamondimg,keyimg,thiefimg
var thief
var randomizer,enter

var num = 0;

var enteredcode = 0;

function preload(){
    diamondimg=loadImage("diamond iamge.png");
    thiefimg=loadImage("thief image(flipped).jfif");
    keyimg=loadImage("key image.jfif");
}

function setup(){
    createCanvas(1000,500);
    thief=createSprite(200,100,35,35)
    bo1=createSprite(500,450,690,15);
    bo2=createSprite(500,50,690,15);
    bo3=createSprite(150,307,15,300);
    bo4=createSprite(840,250,15,415);
    bo5=createSprite(250,245,15,220);
    bo6=createSprite(350,120,15,150);
    bo7=createSprite(392,190,100,15);
    bo8=createSprite(392,300,100,15);
    bo9=createSprite(350,320,15,50);
    bo10=createSprite(538,350,590,15)
    boinv=createSprite(150,105,15,125);
    //bo6=createSprite()
    
    randomizer=createInput("Enter The Code Here")
    enter=createButton("Enter")
   

}

function draw() {
background("black")
thief.bounceOff(bo1)
thief.bounceOff(bo2)
thief.bounceOff(bo3)
thief.bounceOff(bo4)
thief.bounceOff(bo5)
thief.bounceOff(bo6)
thief.bounceOff(bo7)
thief.bounceOff(bo8)
thief.bounceOff(bo9)
thief.bounceOff(bo10)


if(keyDown(UP_ARROW)){
    thief.y=thief.y-5
}

if(keyDown(DOWN_ARROW)){
    thief.y=thief.y+5
}

if(keyDown(LEFT_ARROW)){
    thief.x=thief.x-5
}

if(keyDown(RIGHT_ARROW)){
    thief.x=thief.x+5
}

randomizer.position(370,100)
enter.position(400,150)

enteredcode = randomizer.input.value

enter.mousePressed(()=>{
    
})

console.log(enteredcode)

drawSprites();
}