function sensSmileFaceCheckY(y, r, sensInitial) {
  //verificare limmita Top S1
  if (y < limitTop + r) {
    return 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
 // if (y > limitBottom - r) {
   // return -1; //schimbare de sens
  //} return s;
  return sensInitial;
}
function sensSmileFaceCheckX(x, r, s) {
  //verificare limmita Left S1
  if (x < limitLeft + r) {
    return 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (x > limitRight - r) {
    return -1; //schimbare de sens
  } return s;
}
function smileyFaceMario(x, y, d) {
  //skin
  fill("#ffff00");
  circle(x, y - 10, d);

  //one eye 
  fill("#000000");
  circle(x, y, 30);

  //pupil
  fill("#ffffff");
  circle(x, y, 25);

  //pupil 2
  fill("#000000");
  circle(x, y, 10);

  //mouth
  fill("#ffffff");
  arc(x, y + 30, 70, 10, 0, Math.PI);
}

function smileyFacerSebi(x, y, d) {
  //skin   
  fill("#fff000");

  circle(x, y, d)

  fill("#ff0000")
  circle(x + 25, y - 20, 30)
  circle(x - 25, y - 20, 30)
  //left eye
  fill("#000000")
  circle(x + 25, y - 20, 10)
  line(x - 30, y + 5, x + 30, y)
  //right eye
  circle(x - 25, y - 20, 10)
  fill("#ffffff")
  line(x + 27, y + 20, x + 30, y)
}

