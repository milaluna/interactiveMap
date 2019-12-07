var img;
var circles = [];
// var circlesX = [344, 392, 637, 642, 623, 651, 515, 634, 649, 702, 705, 888, 782, 1026]
// var circlesY = [263, 319, 418, 391, 437, 601, 555, 674, 494, 495, 701, 668, 566, 323]
// var sounds = []
var testSound;
var json;
const ratio = 1511 / 1020;

function preload() {
  img = loadImage('assets/images/soundMap.jpg');

  json = loadJSON('circles.json')
}

function setup() {
  pixelDensity(1);
  const canvasContainer = document.getElementById("canvasContainer");
  const maxWidth = windowWidth;
  const scaledHeight = ratio / maxWidth;
  createCanvas(1511, 1020)
    .parent(canvasContainer);
  for (let i = 0; i < json.data.length; i++) {
    var sound = loadSound(json.data[i].sound);
    circles[i] = new Circle(json.data[i].x, json.data[i].y, 20, sound);
  }
}



function draw() {

  background(img);
  fill(255);
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }

}

function mouseClicked() {
  for (let i = 0; i < json.data.length; i++) {
    var sound = loadSound(json.data[i].sound);
  }
  // console.log(mouseX)
  // console.log(mouseY)

  for (let i = 0; i < circles.length; i++) {
    if (circles[i].isInside(mouseX, mouseY) === true) {
      circles[i].playSound();
    }
  }
}
