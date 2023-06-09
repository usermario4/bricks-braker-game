function initBricks() {
    const bricksNumber = 5;
    const marginLeft = 20;
    const marginRigth = 20;
    const bricksZone = limitRight - marginLeft - marginRigth;
    const bricksDistance = 10;

    const brickWidth =
        Math.round(bricksZone / bricksNumber) - bricksDistance;
for(let j=1;j<bricksNumber+1;j++){
    for (let i = 0; i < bricksNumber; i++) {
        bricks.push({
            color: "#0000ff",
            x: marginLeft + i * bricksDistance + i * brickWidth,
            y: j*40,
            width: brickWidth,
            heigth: 25,
            hit:false
        });
    }
}
}

function showBricks() {
    for (let i = 0; i < bricks.length; i++) {
        
        
        fill(bricks[i].color);
        rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
        
    }
}

function bricksCheck(smileFace) {
    for (let i = 0; i < bricks.length; i++) {
      if (
        bricks[i].x <= smileFace.x + smileFace.ray &&
        bricks[i].x + bricks[i].width >= smileFace.x - smileFace.ray &&
        bricks[i].y <= smileFace.y + smileFace.ray &&
        bricks[i].y + bricks[i].heigth >= smileFace.y - smileFace.ray &&
        !bricks[i].hit
      ) {
        bricks[i].hit=true;
        
        bricks[i].x=100000;
      return 1;
      }
    }
    return smileFace.sensY;
  }