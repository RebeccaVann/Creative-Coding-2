

let worldImage;

function preload() {
  worldImage = loadImage("/assets/RV.png");

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 50, 50);

  fill(200, 50, 50);
  noStroke();

  const spacing = 500 / worldImage.width;
  worldImage.loadPixels();

  for (let y = 0; y < worldImage.height; y++) {
    for (let x = 0; x < worldImage.width; x++) {
      const in_color = worldImage.get(x, y);
      const dot_size = (lightness(in_color) / 255) * 50;
      ellipse(
        x * spacing + spacing * 0.5,
        y * spacing + spacing * 0.5,
        dot_size,
        dot_size
      );
    }

    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++)
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
    }

    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++)
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
      y--;
    }
  }


  noLoop();
}
