var c, d;
var j, k;

function setup() {
  createCanvas(800,400);
  
  c = createSprite(400, 200, 50, 50);
  d = createSprite(300, 100, 20, 80);

  j = createSprite(300, 300, 50, 50);
  k = createSprite(300, 200, 50, 20);

  k.velocityY = 2;
  j.velocityY = -2;

  c.shapeColor = "orange";
  d.shapeColor = "orange";
}

function draw() {
  background(255,255,255);  

  bounceOff(j,k);
  
  if (isTouching(c,d) === true) {
    c.shapeColor = "red";
    d.shapeColor = "red";
  } else {
    c.shapeColor = "orange";
    d.shapeColor = "orange";
  }

  drawSprites();
}
