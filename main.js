var song1 = "";
var song2 = "";
var songStatus = "";
var scoreLeft = 0;
var leftX = 0;
var leftY = 0;
var rightX = 0;
var rightY = 0;

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,600,500);
}

function modelLoaded() {
    console.log("The model is loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
     console.log(results);
     scoreLeft = results[0].pose.keypoints[9].score;
     console.log("Score of left hand wrist is = " + scoreLeft);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}