let colors = ["#39ff14", "#FFFF00 ", "#FF0000"];

function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    ellipse(200, 100 * i, 100, 100);
  }
}
