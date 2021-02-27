let catX = 40;
let x = 1;
let y = 1;
let follow = 0.05;

function setup() {
  createCanvas(1000, 800);
  background(100);
  catX = 0;
}

function draw() {
  background(100);
  let preyX = mouseX;
  let dx = preyX - x;
  x += dx * follow;

  let preyY = mouseY;
  let dy = preyY - y;
  y += dy * follow;

  ellipse(x, y, 80, 80);
  fill(0);
}
