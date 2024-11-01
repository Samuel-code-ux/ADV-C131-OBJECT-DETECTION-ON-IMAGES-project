status = ""; 

function preload(){
 img = loadImage('ac.png');
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
   status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}