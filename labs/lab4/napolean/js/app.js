let colors = ["#FFB6C1", "#fffdd0", "#8B4513"];

function setup() {
  createCanvas(400, 300);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(100 * i, 150, 100);
  }
}
