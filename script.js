
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
   //pupil 2
   fill("#000000");
   circle(200,180,10);
     
    //mouth
    fill("#ffffff");
    arc(200,220,60,20,0,Math.PI);
    


}
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
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")

  sensS2X = sensSmileFaceCheckX(moveS2X, rayS2, sensS2X);
sensS2Y = sensSmileFaceCheckX(moveS2Y, rayS2, sensS2Y);

sensS1X = sensSmileFaceCheckX(moveS1X, rayS1, sensS1X);
sensS1Y = sensSmileFaceCheckX(moveS1Y, rayS1, sensS1Y);

  moveS1X += sensS1X*speedS1;
  moveS1Y += sensS1Y*speedS1;

  moveS2X += sensS2X*speedS2;
  moveS2Y += sensS2Y*speedS2;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);
smileyFacerSebi(moveS2X,moveS2Y,rayS2*2);
}






