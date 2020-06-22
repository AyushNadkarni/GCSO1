var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
 
  car = createSprite(100,200,50,50);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
 
wall = createSprite(700,200,60,height/2);
weight = random(400,1500);
}

display()
car.display();
wall.display();



function draw() {
  background("blue"); 

 if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5 *  weight * speed * speed/22509;
  if(deformation>180)
 {
   car.shapeColor = color("red");
 }

 if(deformation<100 )
 {
   car.shapeColor = color("yellow");
   car.velocityX = 0;
 }

 if(deformation < 100)
{
  car.shapeColor = color("green");
  car.velocityX = 0;
}
}

  drawSprites();
}
