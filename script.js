
function setup() {
  createCanvas(600, 600);
  initBricks();
}

function draw() {
  background("#00F6FE")

  SmileyFaceMario.sensX = sensSmileFaceCheckX(SmileyFaceMario.x, SmileyFaceMario.ray, SmileyFaceMario.sensX);
  SmileyFaceMario.sensY = sensSmileFaceCheckY(SmileyFaceMario.y, SmileyFaceMario.ray, SmileyFaceMario.sensY);
  SmileyFaceMario.sensY = bottomBarCheck(SmileyFaceMario);
  SmileyFaceMario.sensY = bricksCheck(SmileyFaceMario);
  SmileyFaceMario.x += SmileyFaceMario.sensX * SmileyFaceMario.speed;
  SmileyFaceMario.y += SmileyFaceMario.sensY * SmileyFaceMario.speed;

  smileyFaceMario(SmileyFaceMario.x, SmileyFaceMario.y, SmileyFaceMario.ray * 2);

  SmileyFacerSebi.sensX = sensSmileFaceCheckX(SmileyFacerSebi.x, SmileyFacerSebi.ray, SmileyFacerSebi.sensX);
  SmileyFacerSebi.sensY = sensSmileFaceCheckY(SmileyFacerSebi.y, SmileyFacerSebi.ray, SmileyFacerSebi.sensY);

  SmileyFacerSebi.x += SmileyFacerSebi.sensX * SmileyFacerSebi.speed;
  SmileyFacerSebi.y += SmileyFacerSebi.sensY * SmileyFacerSebi.speed;

  smileyFacerSebi(SmileyFacerSebi.x, SmileyFacerSebi.y, SmileyFacerSebi.ray * 2);

  bottomBar();

}






