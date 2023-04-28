
function setup() {
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")



sensS1X = sensSmileFaceCheckX(moveS1X, rayS1, sensS1X);
sensS1Y = sensSmileFaceCheckY(moveS1Y, rayS1, sensS1Y);

moveS1X += sensS1X*speedS1;
moveS1Y += sensS1Y*speedS1;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);


smileyFacerSebi.sensX = sensSmileFaceCheckX(smileyFacerSebi.x, smileyFacerSebi.ray, smileyFacerSebi.sensX);
smileyFacerSebi.sensY = sensSmileFaceCheckY(smileyFacerSebi.y, smileyFacerSebi.ray, smileyFacerSebi.sensY);

smileyFacerSebi.x += smileyFacerSebi.sensX*smileyFacerSebi.speed;
smileyFacerSebi.y += smileyFacerSebi.sensY*smileyFacerSebi.speed;

smileyFacerSebi(smileyFacerSebi.X,smileyFacerSebi.Y,smileyFacerSebi.ray*2);

}






