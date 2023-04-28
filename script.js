
function setup() {
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")



SmileyFaceMario.sensX = sensSmileFaceCheckX(SmileyFaceMario.X, SmileyFaceMario.ray, SmileyFaceMario.X);
SmileyFaceMario.sensY = sensSmileFaceCheckY(SmileyFaceMario.Y, SmileyFaceMario.ray, SmileyFaceMario.Y);



smileyFaceMarioSmiley(SmileyFaceMario.X,SmileyFaceMario.Y,SmileyFaceMario.ray*2);


smileyFacerSebi.sensX = sensSmileFaceCheckX(smileyFacerSebi.x, smileyFacerSebi.ray, smileyFacerSebi.sensX);
smileyFacerSebi.sensY = sensSmileFaceCheckY(smileyFacerSebi.y, smileyFacerSebi.ray, smileyFacerSebi.sensY);

smileyFacerSebi.x += smileyFacerSebi.sensX*smileyFacerSebi.speed;
smileyFacerSebi.y += smileyFacerSebi.sensY*smileyFacerSebi.speed;

smileyFacerSebi(smileyFacerSebi.X,smileyFacerSebi.Y,smileyFacerSebi.ray*2);

}






