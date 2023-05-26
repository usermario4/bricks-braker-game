function bottomBarCheck(smileFace) {
    if (
      smileFace.y + smileFace.ray >= BottomBar.bottomYPosition &&
      smileFace.y + smileFace.ray <= limitBottom &&
      smileFace.x + smileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
      smileFace.x - smileFace.ray < mouseX + Math.round(BottomBar.width / 2)
    ) {
      smileFace.speed++
      console.log(smileFace.speed)
      smileFace.sensX=smileFace.sensX*(-1)
      return -1;
    }
    else
    return smileFace.sensY;
  }

function bottomBar() {
    fill("#121212");
    rect(mouseX - Math.round(BottomBar.width / 2),
        BottomBar.bottomYPosition,
        BottomBar.width,
        BottomBar.height)

}