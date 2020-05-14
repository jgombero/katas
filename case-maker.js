const camelCase = function(input) {
  let output = "";
  for (let i=0; i<input.length; i++) {
    if (input[i-1] === " ") {
      output += input[i].toUpperCase();
    } else if (input[i] === " ") {
      output += "";
    } else {
      output += input[i];
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));