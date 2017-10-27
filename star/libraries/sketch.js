/* Creation and computation - Experiment 2 : Multiscreens
   Kate Hartman & Nick Puckett
   Team Members: Yiyi Shao - Jad Rabbaa */
var song;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

//preloading to make things faster
function preload(){
  song = loadSound("jinglebell.mp3");
}

//what happens when you touch the screen
function touchStarted(){
   song.play();
}

function draw() {
  background("#02590A");
  noStroke();

  push();
  fill(color(255,230,0,80));
  translate(width*0.5, height*0.5);
  rotate(frameCount / 140.0);
  star(0, 0, windowWidth/11.8, windowWidth/2.8, 6); 
  pop();

  push();
  fill(color(255,206,7,135));
  translate(width*0.5, height*0.5);
  rotate(frameCount / -120.0);
  star(0, 0, windowWidth/10.8, windowWidth/2.2, 8); 
  pop();

  push();
  fill(color(250,240,90,105));
  translate(width*0.5, height*0.5);
  rotate(frameCount / 160.0);
  star(0, 0, windowWidth/12, windowWidth/2.2, 7); 
  pop();

  strokeWeight(2);
  stroke("#FFFF00");
  push();
  fill("#FFCE00");
  translate(width*0.5, height*0.5);
  rotate(frameCount / -170.0);
  star(0, 0, windowWidth/7.8, windowWidth/2.6, 5); 
  pop();

  strokeWeight(2);
  stroke("#FFFF00");
  push();
  noFill();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -170.0);
  star(0, 0, windowWidth/8, windowWidth/2.8, 5); 
  pop();

  strokeWeight(2);
  stroke("#FFFF00");
  push();
  noFill();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -170.0);
  star(0, 0, windowWidth/9, windowWidth/3.8, 5); 
  pop();

  strokeWeight(2);
  stroke("#FFFF00");
  push();
  noFill();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -170.0);
  star(0, 0, windowWidth/10, windowWidth/4.8, 5); 
  pop();

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}