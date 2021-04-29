let x, y;
let xoff = 0.0;

function setup() {
  createCanvas(400, 400);
  background(51);
  x = 200;
  y = 200;
}

function draw() {
  stroke(255);
  strokeWeight(2);

  // const r = floor(random(4));
  let r = floor(noise(xoff) * 4);

  const step = 0.01;

  switch (r) {
    case 0:
      x += step;
      break;
    case 1:
      x -= step;
      break;
    case 2:
      y += step;
      break;
    case 3:
      y -= -step;
      break;
  }

  point(x, y);
  xoff += 0.01;
}
