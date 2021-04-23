function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (x + y * width) * 4;
      pixels[index] = 255; // Red
      pixels[index + 1] = 255; // Green
      pixels[index + 2] = 0; // Blue
      pixels[index + 3] = 255; // Alpha
    }
  }
  updatePixels();
}
