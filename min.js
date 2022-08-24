leftWrist = 0;
rightWrist = 0;
difference = 0;




function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(200, 300); 
    canvas = createCanvas(500, 500);
    canvas.position(800, 250);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet se inicializó correctamente");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x; 
        console.log("leftWrist" + leftWrist + "rightWrist" + rightWrist + "diferencia" + difference);
        difference = floor(leftWrist - rightWrist);
    }
}



function draw(){
    background("#ffff00");
    textSize(difference);
    fill("#FFFFFF");
    text("Santiago", 30, 300);
    document.getElementById("span").innerHTML = "El tamaño de la fuente es de: " + difference + " px";
}

