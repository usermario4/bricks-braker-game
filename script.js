
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






