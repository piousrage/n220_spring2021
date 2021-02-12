function setup() {
  createCanvas(900, 700);

  background("white");

  for (var i = 2; i < 8; i++) {
    for (var x = 6; i < x; x--) {
      fill("red");

      square(i * 60, x * 60, 57);
    }
  }
}
