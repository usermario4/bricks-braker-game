
function setup() {
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")

smileyFacerSebi.X = sensSmileFaceCheckX(smileyFacerSebi.x, smileyFacerSebi.ray, smileyFacerSebi.X);
smileyFacerSebi.Y = sensSmileFaceCheckX(smileyFacerSebi.y, smileyFacerSebi.ray, smileyFacerSebi.Y);

sensS1X = sensSmileFaceCheckX(moveS1X, rayS1, sensS1X);
sensS1Y = sensSmileFaceCheckX(moveS1Y, rayS1, sensS1Y);

  moveS1X += sensS1X*speedS1;
  moveS1Y += sensS1Y*speedS1;

  smileyFacerSebi.x += smileyFacerSebi.sensX*smileyFacerSebi.speed;
  smileyFacerSebi.y += smileyFacerSebi.sensY*smileyFacerSebi.speed;

smileyFaceMario(moveS1X,moveS1Y,rayS1*2);
smileyFacerSebi(smileyFacerSebi.X,smileyFacerSebi.Y,smileyFacerSebi.ray*2);



}






