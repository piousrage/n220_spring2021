let positions = [0, 0, 0, 0];
let colors = ["green", "blue", "purple", "yellow"];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  console.log(positions);

  background(10);

  positions.push(mouseX);
  positions.shift();

  for (var i = 0; i < positions.length; i++) {
    circle(positions[i], 150, 30);
  }
}
