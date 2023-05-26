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
    let str = "";
    while (num != 0) {
        for (var key in romanNumerals) {

            if (num === romanNumerals[key]) {
                str += key;
                num -= romanNumerals[key];
                break;
            }

            if (num > romanNumerals[key]) {
                str += key;
                num -= romanNumerals[key];
                break;
            }

        }
    }

    num = str;
    // console.log(num);
    return num;
}


convertToRoman(36);
