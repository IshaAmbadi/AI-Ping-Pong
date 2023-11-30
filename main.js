noseX = 0;
noseY = 0;

function preload() {
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Your model has loaded!');
}