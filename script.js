function setup(){
    createCanvas(400,400)
}

function draw(){

    background("#00F6FE")

    smileyFacerSebi();
    smileyFaceMario();

}

function  smileyFacerSebi(){
    //skin   
    fill("#fff000");
    
    circle(200,200, 100)
     //mouth 
//arc(200,210,20,-10,0,Math.PI)
    
    fill("#ff0000")
    circle(225,180,30)
    circle(175,180,30)
//left eye
    fill("#000000") 
    circle(225,180,10)
line(230, 200, 170,200)
    //right eye
    circle(175,180,10)
    fill("#ffffff")
    line(227,210,230,200)
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
   //pupil 2
   fill("#000000");
   circle(200,180,10);
     
    //mouth
    fill("#ffffff");
    arc(200,220,60,20,0,Math.PI);
    


}
