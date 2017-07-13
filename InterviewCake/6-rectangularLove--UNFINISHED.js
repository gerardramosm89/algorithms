var myRectangle = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,
  // width and height
  width: 10,
  height: 4,
};

r1 = {
  leftx: 0,
  bottomy: 1,
  width: 1,
  height: 1
}

r2 = {
  leftx: 2,
  bottomy: 2,
  width: 2,
  height: 2
}

function findXOverlap (r1, r2) {
  if (r2.leftx <= r1.width + r1.leftx) {
    console.log('we have an X overlap');
    return true;
  } else {
    console.log('we dont have an Y overlap');
  }
}
function findYOverlap (r1, r2) {
  if (r2.bottomy <= r1.height + r1.bottomy) {
    console.log('we have a Y overlap');
    return true;
  } else {
    console.log('we dont have a Y overlap');
  }
}
findXOverlap(r1, r2);
findYOverlap(r1, r2);


