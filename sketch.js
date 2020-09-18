var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  
}

function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(deformation<10){
    bullet.shapeColor=color(0, 255, 0);
  }
  else if(deformation>10){
    bullet.shapeColor=color(255, 0, 0);
  }
}
  drawSprites();
}

function hasCollided(b,w){
  bRightEdge=b.width+b.x;
  wLeftEdge=w.x;
  
  if(bRightEdge>=wLeftEdge){
    return true;
  }
  else{
    return false;
  }
  
}