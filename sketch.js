//Create variables here
var dog,dogHappy,dogHappy1;
var dogFood = 20;
function preload()
{
  //load images here
  dogHappy = loadImage("images/dogimg.png")
  dogHappy1 = loadImage("images/dogimg1.png")
  
}

function setup() {
  createCanvas(800, 700);
   background("green");
   dog = createSprite(400,350,20,20)
   dog.addImage(dogHappy);
   dog.scale = 0.2;
  
}


function draw() {  


  drawSprites();
  textSize(20);
text("press space to feed the dog",320,550);
text("food = " + dogFood,320,150)
  //add styles here
  
 
     
 }



function keyPressed(){
  if((keyCode === 32) ){
    dogFood = dogFood - 1;
    dog.addImage(dogImage1);
}
}