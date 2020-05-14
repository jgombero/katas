const repeatNumbers = function(data) {
  let outputArray = [];
  let outputString = '';
  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i][1]; j++) {
      outputString += data[i][0];
    }
    outputArray.push(outputString);
    outputString = '';
  }
  return outputArray.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));