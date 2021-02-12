function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  noFill();

  for (var i = 0; i < 40; i++) {
    circle(200, 200, i * 10);
  }
  console.log("Afterwards: " + i);
}
