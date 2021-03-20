let positions = [50, 100, 150, 200, 250, 300, 350, 400, 450];
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
  createCanvas(1000, 650);
}

function draw() {
  console.log(positions);
  background(180);

  if (mouseIsPressed) {
    positions.push(mouseX);
    positions.shift();
  }

  for (var i = 0; i < positions.length; i++) {
    fill(colors[i]);
    circle(positions[i], 50, 10);
    circle(positions[i], 100, 20);
    circle(positions[i], 150, 30);
    circle(positions[i], 200, 40);
    circle(positions[i], 250, 50);
    circle(positions[i], 310, 50);
    circle(positions[i], 360, 40);
    circle(positions[i], 410, 30);
    circle(positions[i], 460, 20);
    circle(positions[i], 510, 10);
  }
}
