let moveS1X = 300;
let moveS1Y = 200;

let sensS1X = 1;
let sensS1Y = 1;

let speedS1=3;//viteza

 rayS1=60;
 

let limitTop = 0;
let limitBottom = 400;
let limitLeft = 0;
let limitRight = 400;

function setup() {
  createCanvas(400, 400);
}

function draw(){
    background("#00F6FE")

  //verificare limmita Top S1
  if (moveS1Y < limitTop+ rayS1) {
    sensS1Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS1Y > limitBottom- rayS1) {
    sensS1Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS1X < limitLeft+ rayS1) {
    sensS1X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS1X > limitRight - rayS1) {
    sensS1X = -1; //schimbare de sens
  }

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y*speedS1;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);
smileyFacerSebi();
}

function smileyFaceMario(x,y,d){
    //skin
    fill("#ffff00");
    circle(x,y-10,d);

    //one eye 
    fill("#000000");
    circle(x,y,30);

   //pupil
   fill("#ffffff");
   circle(x,y,25);
   
   //pupil 2
   fill("#000000");
   circle(x,y,10);
     
    //mouth
   fill("#ffffff");
    arc(x,y+30,70,10,0,Math.PI);}




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

  
