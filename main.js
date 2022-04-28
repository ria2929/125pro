difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
  
    canvas = createCanvas(500, 450);
    canvas.position(700,190);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
  
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
  
      console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
  }

function draw() {
    background('#f5edd5');
    textSize(difference);
    fill('#000000');
    text('Ria', 50, 400);
}
    
    


