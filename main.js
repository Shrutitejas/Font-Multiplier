//nose_x= 0;
//nose_y= 0;
right_wrist_x= 0;
left_wrist_x= 0;
difference= 0;

function setup() {
    canvas= createCanvas(400, 400);
    canvas.position(700, 130);
    camera= createCapture(VIDEO);
    camera.size(400, 400);
    camera.position(150, 130);
    poseNet= ml5.poseNet(camera, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("modelLoaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        //nose_x= results[0].pose.nose.x;
        //nose_y= results[0].pose.nose.y;
        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x;
        difference= Math.floor(left_wrist_x - right_wrist_x);
    }
}

function draw() {
    background("grey");
    document.getElementById("square_size").innerHTML="Size of Text is " + difference + "px";

    stroke("white");
    fill("pink");
    textSize(difference);
    text("Be Happy!!", 50, 200);
}