function setup() {
  createCanvas(1500, 100);
  background(999);
}

function draw() {
  for (var i = 1; i < 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      Fill("blue");
      rect(i * 45, 30, 15, 15);
    } else if (i % 5 == 0) {
      fill("green");
      rect(i * 45, 30, 15, 15);
    } else if (i % 3 == 0) {
      fill("purple");
      circle(i * 45, 30, 15);
    } else {
      fill("black");
      circle(i * 45, 30, 15);
    }
  }
}
