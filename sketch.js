var bullet,speed,weight, thickness;
  

function setup() {
  createCanvas(800,400);
 

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet=createSprite(100,200,20,50);
  bullet.velocityX=speed

  wall=createSprite(500,200,50,400);
  
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage= 0.5*weight*speed* speed/(thickness*thickness* thickness);

    if(damage>10) {
      wall.shapeColor=(255,0,0)
    }

    if(damage<10) {

      wall.shapeColor=(0,255,0)
    }
   
  }
  

 
  

  drawSprites();
}