const sumLargestNumbers = function(data) {
  let biggestNum = 0;
  let secondBiggest = 0;
  for (let i=0; i<data.length; i++) {
    for (let j=0; j<data.length; j++) {
      if (data[j]>biggestNum) {
        biggestNum = data[j];
      }
    }
    if (data[i]>secondBiggest && data[i] < biggestNum) {
        secondBiggest = data[i];
    }
  }
  return biggestNum + secondBiggest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));