const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function convertToRoman(num) {
    let result = "";
    while (num !== 0) {
        for (const key in romanNumerals) {

            if (num === romanNumerals[key]) {
                result += key;
                num -= romanNumerals[key];
                break;
            }

            if (num > romanNumerals[key]) {
                result += key;
                num -= romanNumerals[key];
                break;
            }
        }
    }

    return result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(10));
console.log(convertToRoman(15));
