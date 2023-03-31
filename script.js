let moveS1X = 300;
let moveS1Y = 200;

let moveS2X = 300;
let moveS2Y = 200;

let sensS1X = 1;
let sensS1Y = 1;

let sensS2X = 1;
let sensS2Y = 1;

let speedS1=3;//viteza

 rayS1=60;
 let speedS2=7;//viteza

 rayS2=60;
 

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

  //verificare limmita Top S1
  if (moveS2Y < limitTop+ rayS2) {
    sensS2Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS2Y > limitBottom- rayS2) {
    sensS2Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS2X < limitLeft+ rayS2) {
    sensS2X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS2X > limitRight - rayS2) {
    sensS2X = -1; //schimbare de sens
  }

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y*speedS2;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);
smileyFacerSebi(moveS2X,moveS2Y,rayS2*2);
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




function  smileyFacerSebi(x,y,d){
    //skin   
    fill("#fff000");
    
    circle(x,y,d)
     //mouth 
//arc(200,210,20,-10,0,Math.PI)
    
    fill("#ff0000")
    circle(x+25,y-20,30)
    circle(x-25,y-20,30)
//left eye
    fill("#000000") 
    circle(x+25,y-20,10)
line(x-30, y+5, x+30,y)
    //right eye
    circle(x-25,y-20,10)
    fill("#ffffff")
    line(x+27,y+20,x+30,y)
}

  
