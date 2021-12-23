leftWristX = 0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600 , 600);
    canvas=createCanvas(650 , 650);
    canvas.position( 725 , 150);
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);

    red=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
}

function draw(){
  background(red , green , blue);
  
  textSize(difference);
  fill(red);
  text('Hanish' , 50 , 400);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
    }
     
}