const urlDecode = function(text) {
  output = {};
  let textOutput = text.replace(/%20/g, ' ').split(/[&=]/);
  for (let i=0; i<textOutput.length; i+=2) {
    output[textOutput[i]] = textOutput[i+1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);