//  A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.

// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.
// Two rectangles overlapping a little. It must be love.

// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis. 

r2 = {
  leftx: 0,
  bottomy: 1,
  width: 1,
  height: 1
}

r1 = {
  leftx: 2,
  bottomy: 2,
  width: 2,
  height: 2
}

function findXOverlap (r1, r2) {
  let higherXStart = Math.max(r1.leftx, r2.leftx);
  let lowestEndPoint = Math.min(r1.width + r1.leftx, r2.width + r2.leftx);
  console.log(`higherXStart is: ${higherXStart}. lowestEndPoint is: ${lowestEndPoint}`);

  // If this is the case, we have no overlap
  if (higherXStart >= lowestEndPoint) {
    return { startPoint: null, width: null }
  }
}

findXOverlap(r1, r2);


