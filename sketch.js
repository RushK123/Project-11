var trackImage, running, track, runner, power, powerImage;
//(Above) declare the variables

function preload() {
  //pre-load images
  //make running animation
  running = loadAnimation("Runner-1.png", "Runner-2.png");
  //make track image
  trackImage = loadImage("path.png");
  //make power image
  powerImage = loadImage("power.png");
}

function setup() {

  createCanvas(400, 400);

  //create sprites here
  //create the track things
  track = createSprite(200, 200, 300, 350);
  track.addImage(trackImage);

  //create the runner things
  runner = createSprite(300, 300, 1000, 120);
  runner.addAnimation("r", running);

}

function draw() {
  //The background color is black
  background(0);

  //movement of the track
  track.velocityY = 7;

  /*The runner can move left and right according to the mouse,
  however, the runner always stays in line with the track
  boundaries.*/

  runner.x = mouseX;
  if (runner.x < 95) {
    runner.x = 95;
  }
  if (runner.x > 307) {
    runner.x = 307;
  }
  //The track repeats itself cleanly
  if (track.y > 400) {
    track.y = (track.height / 6);
    power = createSprite(300,100,300,350);
    power.addImage(powerImage);
    power.scale = 0.3
  }

  
  //setting the scale of the runner

  runner.scale = 0.1;
  
  drawSprites();
}
