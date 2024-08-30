"use strict";

//const number = 12345

function number(num) {
  const convert = num.toString();
  const firtChiffre = convert.charAt(0);
  for (let i = 0; i < convert.length; i++) {
    if (firtChiffre !== convert[i]) {
      return false;
    }
    }
    return true
}
console.log(number(1234));

