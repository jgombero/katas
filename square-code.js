const squareCode = function(message) {
  let output = '';
  let NoSpaces = message.replace(/[' ']/g, '');
  let rowLength = Math.ceil(Math.sqrt(NoSpaces.length));
  let squareText = '';
  for (let i=0; i<NoSpaces.length; i+=rowLength) {
    squareText += NoSpaces.substring(i, i+rowLength) + '\n';
  }
  let arrayText = squareText.split(/\n/);
  
  for (let i=0; i<arrayText.length; i++) {
    for (let j=0; j<rowLength; j++) {
      if (typeof arrayText[j][i] === 'string')
      output += arrayText[j][i];
    }
    output += ' ';
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));