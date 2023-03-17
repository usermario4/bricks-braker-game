function setup(){
    createCanvas(400,400)
}

function draw(){
    background("#00ff00")

smileyFaceMario();

}

function smileyFaceMario(){
    //skin
    fill("#fff000");
    circle(200,200,100);

    //right eye
    circle(220,180,20);

    //left eye
    circle(180,180,20);
    //pupil right
    fill("#000000");
    circle(220,180,10);
     //pupil left
     fill("#000000");
     circle(180,180,10);
     
    //mouth
    fill("#ffffff");
    arc(200,220,60,20,0,Math.PI);
    


}
