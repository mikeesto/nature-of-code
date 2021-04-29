let inc = 0.005;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      const index = (x + y * width) * 4;
      const r = noise(xoff, yoff) * 255;
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  // noiseDetail(8, 0.7); // https://p5js.org/reference/#/p5/noiseDetail
  updatePixels();
}
