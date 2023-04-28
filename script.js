
function setup() {
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")



smileyFacerSebi.X = sensSmileFaceCheckX(smileyFacerSebi.x, smileyFacerSebi.ray, smileyFacerSebi.X);
smileyFacerSebi.Y = sensSmileFaceCheckX(smileyFacerSebi.y, smileyFacerSebi.ray, smileyFacerSebi.Y);

  sensS2X = sensSmileFaceCheckX(moveS2X, rayS2, sensS2X);
sensS2Y = sensSmileFaceCheckX(moveS2Y, rayS2, sensS2Y);



sensS1X = sensSmileFaceCheckX(moveS1X, rayS1, sensS1X);
sensS1Y = sensSmileFaceCheckY(moveS1Y, rayS1, sensS1Y);


moveS1X += sensS1X*speedS1;
moveS1Y += sensS1Y*speedS1;

  moveS1X += sensS1X*speedS1;
  moveS1Y += sensS1Y*speedS1;


  smileyFacerSebi.x += smileyFacerSebi.sensX*smileyFacerSebi.speed;
  smileyFacerSebi.y += smileyFacerSebi.sensY*smileyFacerSebi.speed;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);
smileyFacerSebi(smileyFacerSebi.X,smileyFacerSebi.Y,smileyFacerSebi.ray*2);

  moveS2X += sensS2X*speedS2;
  moveS2Y += sensS2Y*speedS2;


smileyFaceMario(moveS1X,moveS1Y,rayS1*2);


smileyFacerSebi.sensX = sensSmileFaceCheckX(smileyFacerSebi.x, smileyFacerSebi.ray, smileyFacerSebi.sensX);
smileyFacerSebi.sensY = sensSmileFaceCheckY(smileyFacerSebi.y, smileyFacerSebi.ray, smileyFacerSebi.sensY);

smileyFacerSebi.x += smileyFacerSebi.sensX*smileyFacerSebi.speed;
smileyFacerSebi.y += smileyFacerSebi.sensY*smileyFacerSebi.speed;

smileyFacerSebi(smileyFacerSebi.X,smileyFacerSebi.Y,smileyFacerSebi.ray*2);

}






