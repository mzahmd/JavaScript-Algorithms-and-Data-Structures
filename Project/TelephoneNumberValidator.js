const format = /^[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]*$/

function telephoneCheck(str) {

  let countDigits = 0;
  let counter1 = 0;
  let counter2 = 0;
  let pair = 0;
  let mod = 0;
  let onlyTwice = 0;
  let wasDigit = false;
  let countryCode = str[0] === "1";

  for (let i = 0; i < str.length; i++) {

    if (str[i] === "(" && str[i + 4] != ")" || str[i] === ")" && str[i - 4] != "(") {
      return false;
    }

    if ((/\d/).test(str[i])) {
      countDigits++;
      wasDigit = true;
      if (!countryCode) {
        counter1 += i;
      } else {
        countryCode = !countryCode;
        wasDigit = !wasDigit;
      }
    }

    if(wasDigit && !countryCode && pair<3) {
      counter2 += i;
      pair++;
      mod++;
    }

    if(mod === 3 && onlyTwice < 2) {
      onlyTwice++;
      if((counter1 - counter2) != 0) {
        return false;
      }
      mod = 0;
      pair = 0;
      wasDigit = !wasDigit;
    }

    if (format.test(str[i])) {
      return false;
    }

  }

  if (countDigits > 11 || countDigits < 10) {
    return false;
  }

  if (countDigits == 11 && str[0] != "1") {
    return false;
  }


  return true;
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 456 789-4444")); // true
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("(555)5(55?)-5555")); // false
console.log(telephoneCheck("55 55-55-555-5")); // false


// let a = (/\d/).test("2")
// console.log(a);

