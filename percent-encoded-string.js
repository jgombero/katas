const urlEncode = function(text) {
  let encodedText = "";
  text = text.trim();
  for (i=0; i<text.length; i++) {
    if (text[i] === " ") {
      encodedText += "%20";
    } else {
      encodedText += text[i];
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));