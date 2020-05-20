const blocksAway = function(directions) {
  let away = {east: 0, north: 0};
  let direction = '';
  //to find intial direction
  if (directions[0] === "right") {
    direction = 'E';
    away.east += directions[1];
  } else if (directions[0] === "left") {
    direction = 'N';
    away.north += directions[1];
  }
  //to find rest of directions
  for (i=2; i<directions.length; i+=2) {
    switch (direction) {
      case 'E' :
        if (directions[i] === "right") {
          away.north -= directions[i+1];
          direction = 'S';
          break;
        } else if (directions[i] === "left") {
          away.north += directions[i+1];
          direction = 'N';
          break;
        }
      case 'S' :
        if (directions[i] === "right") {
          away.east -= directions[i+1];
          direction = 'W';
          break;
        } else if (directions[i] === "left") {
          away.east += directions[i+1];
          direction = 'E';
          break;
        }
      case 'W' :
        if (directions[i] === "right") {
          away.north += directions[i+1];
          direction = 'N';
          break;
        } else if (directions[i] === "left") {
          away.north -= directions[i+1];
          direction = 'S';
          break;
        }
      case 'N' :
        if (directions[i] === "right") {
          away.east += directions[i+1];
          direction = 'E';
          break;
        } else if (directions[i] === "left") {
          away.east -= directions[i+1];
          direction = 'W';
          break;
        }
    }
  }
  return away;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));