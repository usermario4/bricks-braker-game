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

    //one eye 
    fill("#000000");
    circle(200,180,30);

   //pupil
   fill("#ffffff");
   circle(200,180,25);
     
    //mouth
    fill("#ffffff");
    arc(200,220,60,20,0,Math.PI);
    


}
