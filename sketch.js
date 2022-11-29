
var boyImg; 

function preload()
{
  
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup()
{
  
  createCanvas(400,400);
  
//creating boy running
 boy = createSprite(180,340,30,30);
 boy.addAnimation("Runner",boyImg);
 boy.scale=0.08;
  
}

function draw()
{
  background(0);
  drawSprites();
}
