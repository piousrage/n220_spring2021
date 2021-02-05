let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 0, 100);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  fill(0, 100, 100);
  if (xPos > 600) {
    xPos = 0;
  }

  circle(xPos, yPos, 30);
}
