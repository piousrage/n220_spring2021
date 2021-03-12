var itsaRect = {
  x: 200,
  y: 200,
  r: 300,
  color: [120, 30, 93],
};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(itsaRect.color);
  rect(itsaRect.x, itsaRect.y, itsaRect.r);
}
