var hr,mn,sc;

function setup() {
  createCanvas(1800,1400);
  

  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(200,200,500,200);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(200,200,500,200);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(200,200,500,200);
  pop();


  drawSprites();
}