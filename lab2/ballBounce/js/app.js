let xPos = 400;
let yPos = 300;

let xSpeed = 10;
let ySpeed = -10;
let xSpeedT = -10;
let ySpeedT = 10;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 0, 100);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeedT;

  fill(0, 100, 100);
  if (xPos > 800) {
  }

  if (yPos > 600) {
    yPos = 0;
  }

  circle(xPos, yPos, 30);
}
