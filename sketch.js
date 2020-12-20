var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);
  
  textSize(20);
  fill(255, 0, 0);
  text("Wait till 12:00.", 50, 50);
  fill(0, 255, 0);
  text("And you can open the door.", 10, 80);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);

  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  translate(400, 200);
  push();
  rotate(hrAngle);
  strokeWeight(4);
  stroke(0, 0, 255);
  line(0, 0, 0, -60);
  pop();

  push();
  rotate(minAngle);
  strokeWeight(4);
  stroke(0, 255, 0);
  line(0, 0, 0, -110);
  pop();

  push();
  rotate(secAngle);
  strokeWeight(4);
  stroke(255, 0, 0);
  line(0, 0, 0, -125);
  pop();

  push();
  strokeWeight(6);
  stroke(0, 0, 255);
  noFill();
  arc(0, 0, 300, 300, 270, hrAngle - 90);
  pop();

  push();
  strokeWeight(6);
  stroke(0, 255, 0);
  noFill();
  arc(0, 0, 315, 315, 270, minAngle - 90);
  pop();

  push();
  strokeWeight(6);
  stroke(255, 0, 0);
  noFill();
  arc(0, 0, 330, 330, 270, secAngle - 90);
  pop();
}