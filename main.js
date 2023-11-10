NoseX = 0;
NoseY = 0;

function preload(){
mustache = loadImage("https://i.postimg.cc/L5vP506m/Mustache-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y
    console.log("Nose X = "+NoseX);
    console.log("Nose Y = "+NoseY);
}

}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, NoseX-40, NoseY, 80, 40);
}
function take_snapshot(){
    save("realtimefilter.png")
}
