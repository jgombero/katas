const makeCase = function(input, cases) {
  let output = '';
  for (let i=0; i<input.length; i++) {
    if (cases === 'camel') {
      if (input[i-1] === ' ') {
        output += input[i].toUpperCase();
      } else if (input[i] === ' ') {
        output += '';
      } else {
        output += input[i];
      }
    } else if (cases === 'pascal') {
      if (i === 0 || input[i-1] === ' ') {
        output += input[i].toUpperCase();
      } else if (input[i] === ' ') {
        output += '';
      } else {
        output += input[i];
      }
    } else if (cases === 'snake') {
      if (input[i] === ' ') {
        output += '_';
      } else {
        output += input[i];
      }
    } else if (cases === 'kebab') {
      if (input[i] === ' ') {
        output += '-';
      } else {
        output += input[i];
      }
    } else if (cases === 'title') {
      if (input[i-1] === ' ' || i === 0) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    } else if (cases === 'vowel') {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'i') {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    } else if (cases === 'consonant') {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'i') {
        output += input[i];
      } else {
        output += input[i].toUpperCase();
      }
    } else if (cases[0] === 'upper' && cases[1] === 'snake') {
      if (input[i] === ' ') {
        output += '_';
      } else {
        output += input[i].toUpperCase();
      }
    }  
  }
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));