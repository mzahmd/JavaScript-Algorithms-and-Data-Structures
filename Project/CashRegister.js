function checkCashRegister(price, cash, cid) {
    let change = (cash - price) * 100;
    let copyCid = [...cid];

    const money = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    }

    let status = "";
    let count = 0;
    const arr = [];
    let res;
    let key;
    let value;
    let amount = 0;
    let wasInWhile = false;


    copyCid.reverse()
    .filter(elem => elem[1] !== 0)
    .forEach(element => {
        key = element[0];
        value = element[1] * 100;


        while (change > 0 && value > 0 && change >= money[key]) {
            change = change - money[key];
            value -= money[key];
            amount++;
            wasInWhile = true;
        }

        if (wasInWhile) {
            arr.push([key, (money[key] / 100) * amount]);
        }

        wasInWhile = false;
        amount = 0;

        count++;
        if (change === 0) {
            return;
        }
    });

    if (change === 0 && count === 1) {
        status = "CLOSED"
        res = {
            status: status,
            change: cid
        };
    } else if (change === 0 && count > 1) {
        arr.map(elem => elem[1] / 100);
        status = "OPEN"
        res = {
            status: status,
            change: arr
        };
    } else {
        status = "INSUFFICIENT_FUNDS";
        res = {
            status: status,
            change: []
        };
    }

    return res;
}



const x = checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(x);


