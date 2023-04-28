
function setup() {
  createCanvas(600, 600);
}
function draw(){
    background("#00F6FE")



SmileyFaceMario.sensX = sensSmileFaceCheckX(SmileyFaceMario.X, SmileyFaceMario.ray, SmileyFaceMario.X);
SmileyFaceMario.sensY = sensSmileFaceCheckY(SmileyFaceMario.Y, SmileyFaceMario.ray, SmileyFaceMario.Y);



smileyFaceMario(SmileyFaceMario.X,SmileyFaceMario.Y,SmileyFaceMario.ray*2);


SmileyFacerSebi.sensX = sensSmileFaceCheckX(SmileyFacerSebi.x, SmileyFacerSebi.ray, SmileyFacerSebi.sensX);
SmileyFacerSebi.sensY = sensSmileFaceCheckY(SmileyFacerSebi.y, SmileyFacerSebi.ray, SmileyFacerSebi.sensY);

SmileyFacerSebi.x += SmileyFacerSebi.sensX*SmileyFacerSebi.speed;
SmileyFacerSebi.y += SmileyFacerSebi.sensY*SmileyFacerSebi.speed;

SmileyFacerSebi(SmileyFacerSebi.X,SmileyFacerSebi.Y,SmileyFacerSebi.ray*2);

}






