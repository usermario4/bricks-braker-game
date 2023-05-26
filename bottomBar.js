function bottomBarCheck(smileFace) {
    if (
      smileFace.y + smileFace.ray >= BottomBar.bottomYPosition &&
      smileFace.y + smileFace.ray <= limitBottom &&
      smileFace.x + smileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
      smileFace.x - smileFace.ray < mouseX + Math.round(BottomBar.width / 2)
    ) {console.log(smileFace.sensY)
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