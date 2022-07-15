img = "";
objects = [];
status = "";

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'status-objects detecting...';
}

function modelLoaded(){
    console.log("modelLoaded");
    status - true;
    objectdetector.detect(img, gotResult);
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status !=""){
        for(i = 0; i < objects.lenth; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,);
        }
    }
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else(console.log(results));
    objects = results;
}