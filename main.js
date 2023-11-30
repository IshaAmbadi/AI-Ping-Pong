rightWristY = 0;
rightWristX = 0;
rightWristScore = 0;

function preload() {
    ball_touch_paddle = loadSound("");
}

function setup() {
	canvas = createCanvas(700,600);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(700, 600);
    video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Your model has loaded!');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristScore = results[0].pose.rightWrist.score;
    }
}

function startGame() {
    game_status = "start";
    document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw() {
    if (rightWristScore > 0.2) {
        fill('#FF0000');
        stroke('#FF0000');
        circle(rightWristX, rightWristY, 20);
    }
}