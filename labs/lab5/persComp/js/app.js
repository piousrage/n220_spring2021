let spyX = 40;
let x = 500;
let y = 400;
let follow = 0.01;

function setup() {
  createCanvas(1000, 800);
  spyX = 0;
}

function draw() {
  background(9);
  let hunterX = mouseX;
  let dx = hunterX - x;
  x -= dx * follow;

  let hunterY = mouseY;
  let dy = hunterY - y;
  y -= dy * follow;

  ellipse(x, y, 20, 20);
  fill(0);
}
