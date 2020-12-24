var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(700,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation= 0.5* weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color("green");
    }
    if(deformation<100&& deformation>100)
    {
      car.shapeColor=color("white");
    }
    if(deformation<100)
    {
      car.shapeColor=color("red"); 
    }
  }
  drawSprites();
}