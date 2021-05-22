var wall,car,thickness ;
var bullet,speed,weight;

function setup() {
speed=random(223,321)
weight=random(30,52)
  createCanvas(800,400);
  bullet=createSprite(400, 200, 50, 50);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, thickness, height/2);
  thickness=random(22,83)

}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }
  
 
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
	bulletRightEdge=lbullet.x +bullet.width;
	wallLeftEdge=lwall.x;
	if(bulletRightEdge>=wallLeftEdge){
		return true
	}
	return false;
  
	if(hasCollided(bullet,wall)){
		bullet.velocityX=0;
		var damage =0.5 * speed* speed/(thickness*thickness*thickness);
		if(damage>10)
		{
			wall.shapeColor=color(255,0,0);
		  }
		  if (damage<10)
		  {wall.shapeColor=color(0,255,0)}
	}	  
}