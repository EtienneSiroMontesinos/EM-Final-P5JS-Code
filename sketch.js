// Etienne Montesinos Final Code

function preload() {
Font = loadFont('https://happycoding.io/fonts/happycoding/happycoding.ttf');
}
let img;
// Background Color, Size, Text And Img Setup
function setup() {
  createCanvas(500, 500);
  
   background(100, 100, 0);
  frameRate(2);
  
  img = loadImage('https://pixabay.com/get/gbe6f86a1e8624d915b5d5d6008f7dda33860c207ae335695bb839895455f9024cb09b8780d34015abb38bf8b12754ea56956d8ca49b7b67deefd26c1dfce0b61bddc3f7d6069048eb54e880ece82165e_1920.jpg');
  
  
   textAlign(CENTER, CENTER);
  textSize(90);
  textFont();
}

//Animated Functions Of Flowers
function draw() {
  image(img, mouseX, mouseY);
  
   drawFlower(random(width), random(height), random(10, 100));
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 3;

  fill(105, 130, 10);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // Upper Right Petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // Lower Left Petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // Lower Right Petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // Flower Center
  fill(155, 90, 100);
  circle(flowerX, flowerY, petalSize);
  
  //Typography Positioning
  
  text('Etienne', width / 2, height / 2 - 40);
  text('Montesinos', width / 2, height / 2 + 60);
  
}
  