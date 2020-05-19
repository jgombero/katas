const makeCase = function(input, style) {
  let output = '';
  let styles = [];
  //stores each style as an array called "styles"
  if (typeof(style) === 'string') {
    styles.push(style);
  } else if (Array.isArray(style) === true) {
    for (i=0; i<style.length; i++) {
      styles.push(style[i]);
    }
  }
  // converts input into camelCase
  const toCamel = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i-1] === ' ') {
        output += input[i].toUpperCase();
      } else if (input[i] === ' ') {
        output += '';
      } else {
        output += input[i].toLowerCase();
      }
    }
    input = output;
  }
  // converts input into PascalCase
  const toPascal = function() {
    for (let i=0; i<input.length; i++) {
      if (i === 0 || input[i-1] === ' ') {
        output += input[i].toUpperCase();
      } else if (input[i] === ' ') {
        output += '';
      } else {
        output += input[i].toLowerCase();
      }
    }
    input = output;
  }
  // converts input into snake_case
  const toSnake = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i] === ' ') {
        output += '_';
      } else {
        output += input[i];
      }
    }
    input = output;
  }
  // converts input into kebab-case
  const toKebab = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i] === ' ') {
        output += '-';
      } else {
        output += input[i];
      }
    }
    input = output;
  }
  // converts input into Title Case
  const toTitle = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i-1] === ' ' || i === 0) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    }
    input = output;
  }
  // converts input into vOwEl
  const toVowel = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'i') {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    }
    input = output;
  }
  // converts input into CoNSoNaNT
  const toConsonant = function() {
    for (let i=0; i<input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'i') {
        output += input[i];
      } else {
        output += input[i].toUpperCase();
      }
    }
    input = output;
  }
  // converts input into UPPERCASE
  const toUpper = function() {
    for (let i=0; i<input.length; i++) {
      output += input[i].toUpperCase();
    }
    input = output;
  }
  // converts input into lowercase
  const toLower = function() {
    for (let i=0; i<input.length; i++) {
      output += input[i].toLowerCase();
    }
    input = output;
  }
  // priortizes cases from least to most
  for (i=0; i<styles.length; i++) {
    switch (styles[i]) {
      case 'upper' :
        toUpper();
        break;
      case 'lower' :
        toLower();
        break;
    }
    output = ''; // resets output for multiple iterations
  }
  for (i=0; i<styles.length; i++) {
    switch (styles[i]) {
      case 'consonant' :
        toConsonant();
        break;
      case 'vowel' :
        toVowel();
        break;
    }
    output = '';
  }
  for (i=0; i<styles.length; i++) {
    switch (styles[i]) {
      case 'title' :
        toTitle();
        break;
      case 'kebab' :
        toKebab();
        break;
      case 'snake' :
        toSnake();
        break;
      case 'pascal' :
        toPascal();
        break;
      case 'camel' :
        toCamel();
        break;
    }
    output = '';
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["camel", "upper"]));
console.log(makeCase("this is a string", ["vowel", "camel"]));
console.log(makeCase("this is a string", ["vowel", "consonant"]));