var r;
var h;


function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  background(44,0,0);
  r=0;
  h=100;
}

function draw() {
  h = 180*sin(0.02*frameCount)+180;
  r = 180*cos(0.02*frameCount)+180;
  
  //background(189,80,100,0.02);
  background(h,100,100,0.02);
  stroke(r,100,100);
  fill(r,100,100);
  ellipse(random(windowWidth),random(windowHeight),random(20,100));
}