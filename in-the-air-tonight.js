const checkAir = function (samples, threshold) {
  let goodCount = 0;
  let badCount = 0;
  for (let i=0; i<samples.length; i++) {
    if (samples[i] === 'clean') {
      goodCount += 1;
    } else if (samples[i] === 'dirty') {
      badCount += 1;
    }
  }
  if (badCount / (goodCount + badCount) > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))