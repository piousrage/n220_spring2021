let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let colors = [
  "green",
  "blue",
  "purple",
  "yellow",
  "teal",
  "white",
  "orange",
  "red",
  "cyan",
];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  console.log(positions);

  background(10);

  if (mouseIsPressed) {
    positions.push(mouseX);
    positions.shift();

    for (var i = 0; i < positions.length; i++) {
      fill(colors[i]);
      circle(positions[i], 0, 30);
      rect(positions[i], 0, 30);
      circle(positions[i], 50, 30);
      rect(positions[i], 50, 30);
      circle(positions[i], 100, 30);
      rect(positions[i], 100, 30);
      circle(positions[i], 150, 30);
      rect(positions[i], 150, 30);
      circle(positions[i], 200, 30);
      rect(positions[i], 200, 30);
      circle(positions[i], 250, 30);
      rect(positions[i], 250, 30);
      circle(positions[i], 300, 30);
      rect(positions[i], 300, 30);
    }
  }
}
