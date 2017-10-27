/* Creation and computation - Experiment 2 : Multiscreens
   Kate Hartman & Nick Puckett
   Team Members: Yiyi Shao - Jad Rabbaa */

//assigning all variables that include the songs 
var song;
var songs;
var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;
var song9;
var song10;
var song11;
var song12;
var song13;
var song14;
var song15;
var song16;
var song17;

//variable for the public div
var testDiv;

function setup() {
    testDiv = createDiv('').size(1,1);
    testDiv.parent('p5Container');

	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');

	//assigning a random color for the ball;
	//var c = color(random(255), random(255), random(255));
	//fill(c);

 	//different christmas balls color
    var c = ["#26FF00","#FCE406","#F47400","#FF0000","#FF78C8","#EC187A","#B600E2","#0BF9F9","#0038A8"];
    ballColor = random(c)
  
    
    //defining volume
    song.setVolume(0.5);
}

//preloading to make things faster
function preload(){
   song1 = loadSound("hohoho.mp3");
   song2 = loadSound("jinglebell.mp3");
   song3 = loadSound("church.mp3");
   song4 = loadSound("urdu.mp3");  
   song5 = loadSound("ukrainian.mp3");
   song6 = loadSound("Spanish.mp3");
   song7 = loadSound("French.mp3");
   song8 = loadSound("Hindi.mp3"); 
   song9 = loadSound("Hebrew.mp3");  
   song10 = loadSound("German.mp3"); 
   song11 = loadSound("Arabic.mp3");  
   song12 = loadSound("French.mp3");  
   song13 = loadSound("Danish.mp3");
   song14 = loadSound("Chinese.mp3");
   song15 = loadSound("Cantonese.mp3");
   song16 = loadSound("English.mp3");
   song17 = loadSound("Romanian.mp3");
   songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17];  
   song  = random(songs);
}



//visuals
function draw(){

    
    // christmas green background 
  background(30, 175, 30);
  //testDiv.html(rotationX); //console
    // christmas ball position on the Y axis
	var ellipseY = map(rotationX, -90, 90, -windowHeight/2, windowHeight/2);
    
    // ellipse size scale
	var ellipseScale = map (rotationX, -90, 90, 0.5, 1.5);

    // christmas ball's thread
	strokeWeight(5);
	stroke(color(10,100,10));
    // length of ball changes 
	line(windowWidth/2,0,windowWidth/2,ellipseY);

    //christmas ball's outline and color
	strokeWeight(2);
	stroke(color(10,100,10));
  
    //christmas ball's position and size
    fill(ballColor);
	ellipse(windowWidth/2, ellipseY, 150*ellipseScale, 150*ellipseScale);
	
	//create christmas ball's light side
    strokeWeight(0);
    fill(255,255,255,95);
    ellipse(windowWidth/2, ellipseY-34*ellipseScale, 110*ellipseScale, 70*ellipseScale); 
  
    //creat christmas ball's shining dots
    fill (255,255,255,255);
    ellipse(windowWidth/2+25*ellipseScale, ellipseY-50*ellipseScale, 10*ellipseScale, 10*ellipseScale);
    ellipse(windowWidth/2+35*ellipseScale, ellipseY-45*ellipseScale, 6*ellipseScale, 6*ellipseScale); 
    
    //create christmas ball's dark side
    fill (0,0,0,25);
    ellipse(windowWidth/2, ellipseY+58*ellipseScale, 65*ellipseScale, 25*ellipseScale); 
    
    // volume changes with rotationX
  	var volume = map(rotationX, 37, 217, 10, 10);
  	volume = constrain(volume, 10, 10);
 	 song.amp(volume);  

    // speed of the song or pitch changes with rotationX 
 	 var speed = map(rotationX, 37, 217, 0, 3);
 	 speed = constrain(speed, 0.01, 3);
 	 song.rate(speed);

   drawSprites();

}

//what happens when you touch the screen
function touchStarted(){
  // songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16];
  // song  = random(songs);
   song.play();
   //ballColor = "#FFFF00";
    var s1 = createSprite(mouseX, mouseY, 20, 20);
    var s2 = createSprite(mouseX, mouseY, 35, 35);
    var s3 = createSprite(mouseX, mouseY, 10, 10);
    var s4 = createSprite(mouseX, mouseY, 15, 15);
    var s5 = createSprite(mouseX, mouseY, 20, 20);
    var s6 = createSprite(mouseX, mouseY, 35, 35);
    var s7 = createSprite(mouseX, mouseY, 10, 10);

     s1.velocity.x = random(-2, 5);
     s1.velocity.y = random(-5, 7);

     s2.velocity.x = random(-10, 2);
     s2.velocity.y = random(-5, 2);

     s3.velocity.x = random(-5, 8);
     s3.velocity.y = random(-1, 3);

     s4.velocity.x = random(-1, 3);
     s4.velocity.y = random(-4, 5);

     s5.velocity.x = random(-3, 5);
     s5.velocity.y = random(-1, 4);

     s6.velocity.x = random(-5, 1);
     s6.velocity.y = random(-1, 5);

     s7.velocity.x = random(-5, 4);
     s7.velocity.y = random(-1, 5);

}