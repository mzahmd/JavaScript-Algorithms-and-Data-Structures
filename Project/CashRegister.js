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

    copyCid.reverse();

    copyCid.filter(elem => elem[1] != 0).forEach(element => {
        key = element[0];
        value = element[1] * 100;


        console.log(element)
        // console.log("key " + key);
        // console.log("value " + value);
        // console.log();

        console.log("money " + money[key]);
        console.log("key " + change);


        if (change >= money[key]) {
            console.log("gepusht")
            arr.push([key, element[1]]);
            while (change >= 0 && value > 0 && change >= money[key]) {
                change = change - money[key];
                console.log("change " + change);
                // console.log(money[key]);
                // console.log();
                value--;
            }
        }

        count++;
    });

    // console.log(change);
    console.log("Mein arr:");
    console.log(arr);
    console.log();

    if (change == 0 && count === 1) {
        status = "CLOSED"
        res = {
            status: status,
            changed: cid
        };
    } else if (change == 0 && count > 1) {
        arr.map(elem => elem[1]/100);
        status = "OPEN"
        res = {
            status: status,
            changed: arr
        };
    } else {
        status = "INSUFFICIENT_FUNDS";
        res = {
            status: status,
            change: []
        };
    }

    console.log()
    console.log("===========")
    console.log()
    console.log("FINISH")
    console.log()
    console.log(res);

    return res;
}


checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])

