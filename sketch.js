var fixedRect, movingRect;


function setup()
{
  createCanvas(1200,800);

  

  movingRect=createSprite(600,400,50,50);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  fixedRect2=createSprite(200,400,50,80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  

  fixedRect3=createSprite(600,400,50,80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;

  fixedRect4=createSprite(800,400,50,80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;

 //fixedRect.velocityX=+2;
 //movingRect.velocityX=-2;



 
  
}

function draw() 
{
  background("pink");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x);


 /* if(movingRect.x-fixedRect.x<fixedRect.width/2 +movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 +movingRect.width/2)
    {

      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1); 
    }*/


  
if(isTouching(movingRect,fixedRect2))
{
  movingRect.shapeColor="black";
  fixedRect2.shapeColor="black";
}
else 
{
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="green";
  

}
  


  drawSprites();
}














