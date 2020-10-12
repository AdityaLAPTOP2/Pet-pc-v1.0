var dog
var game=0
var car
var boneImg
var full
var empty
var feed 
var happy
function preload(){
  happy=loadImage("images/Happy.png")
  boneImg = loadImage("images/Bone.png");
   car=loadImage("images/dogs.png");
 //  milks = loadImage("images/milk.jpg")

}


function setup() {
feed = createSprite(100,100);
  createCanvas(800,400);
 dog = createSprite(700,270)
 dog.addImage(car)
 dog.scale = 0.3
 feed.addImage(boneImg)
 feed.scale=0.1


}

function draw() {
  
if(game===0&&MouseEvent&&keyCode===32){
  feed.x=World.mouseX
  feed.y=World.mouseY

}

if(feed.isTouching(dog)){
game=2
}
if(game===2){
  dog.addImage(happy);
  feed.x=-10
  feed.y=-10
  if(World.frameCount%600===0){
    game=1
  }
  if(game===1){
    feed.x=100
    feed.y=100
    game=0
  }
if(World.frameCount%6000===0){
  dog.addImage(car)

}
}
  background(255,255,255);  
  drawSprites();
}