const calculateChange = function(total, cash) {
  let change = cash - total;
  let changeBack = {};
  let twentyDollar = 0;
  let tenDollar = 0;
  let fiveDollar = 0;
  let twoDollar = 0;
  let oneDollar = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  for (let i=0; i<=change+i; i++) {
    if (change >= 2000) {
      change -= 2000;
      twentyDollar += 1;
      changeBack.twentyDollar = twentyDollar
    } else if (change >= 1000) {
      change -= 1000;
      tenDollar += 1;
      changeBack.tenDollar = tenDollar;
    } else if (change >= 500) {
      change -= 500;
      fiveDollar += 1;
      changeBack.fiveDollar = fiveDollar;
    } else if (change >= 200) {
      change -= 200;
      twoDollar += 1;
      changeBack.twoDollar = twoDollar;
    } else if (change >= 100) {
      change -= 100;
      oneDollar += 1;
      changeBack.oneDollar = oneDollar;
    } else if (change >= 25) {
      change -= 25;
      quarter += 1;
      changeBack.quarter = quarter;
    } else if (change >= 10) {
      change -= 10;
      dime += 1;
      changeBack.dime = dime;
    } else if (change >= 5) {
      change -= 5;
      nickel += 1;
      changeBack.nickel = nickel;
    } else if (change >= 1) {
      change -= 1;
      penny += 1;
      changeBack.penny = penny;
    } else if (change === 0) {
      return changeBack;
    }
  }
  
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));