var itsacircle = {
  x: 20,
  y: 30,
  r: 2,
  color: [120, 30, 93],
};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(itsacircle.color);
  itsacircle.x += 2;
  itsacircle.y += 1.96;
  itsacircle.r += 1.5;

  circle(itsacircle.x, itsacircle.y, itsacircle.r);
}
