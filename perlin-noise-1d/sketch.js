let start = 0;
let inc = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(15);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;

  for (let x = 0; x < width; x++) {
    stroke(255);
    let y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();

  start += 0.01;
}
