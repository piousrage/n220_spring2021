var itsameteor = {
  x: 20,
  y: 30,
  r: 2,
  color: [120, 80, 40],
};

var itsameteor2 = {
  x: 60,
  y: 90,
  r: 6,
  color: [120, 160, 40],
};

var itsameteor3 = {
  x: 120,
  y: 180,
  r: 12,
  color: [240, 255, 80],
};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(itsameteor.color);
  itsameteor.x += 4;
  itsameteor.y += 2;
  itsameteor.r += 0.1;

  if (itsameteor.x > 800) {
    itsameteor.x = 0;
  }

  if (itsameteor.y > 800) {
    itsameteor.y = 0;
  }

  circle(itsameteor.x, itsameteor.y, itsameteor.r);

  fill(itsameteor2.color);
  itsameteor2.x += 4;
  itsameteor2.y += 2;
  itsameteor2.r += 0.1;

  if (itsameteor2.x > 800) {
    itsameteor2.x = 0;
  }

  if (itsameteor2.y > 800) {
    itsameteor2.y = 100;
  }

  circle(itsameteor2.x, itsameteor2.y, itsameteor2.r);

  fill(itsameteor3.color);
  itsameteor3.x += 4;
  itsameteor3.y += 2;
  itsameteor3.r += 0.1;

  if (itsameteor3.x > 800) {
    itsameteor3.x = 0;
  }

  if (itsameteor3.y > 800) {
    itsameteor3.y = 200;
  }

  circle(itsameteor3.x, itsameteor3.y, itsameteor3.r);
}
