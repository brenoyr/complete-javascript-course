"use strict"

// Coding Challenge #1

/* const d1 = 44;
const d2 = 23;
const d3 = 71;

const k1 = 65;
const k2 = 54;
const k3 = 49; */

/* const d1 = 85;
const d2 = 54;
const d3 = 41;

const k1 = 23;
const k2 = 34;
const k3 = 27;

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    let result = "No winner";
    if (avgDolphins >= 2 * avgKoalas) {
        result = `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        result = `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }
    console.log(result);
}

const avgDolphins = calcAverage(d1, d2, d3);
const avgKoalas = calcAverage(k1, k2, k3);

checkWinner(avgDolphins, avgKoalas); */

// Coding Challenge #2

/* function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

console.log(calcTip(100));

const bill1 = 125;
const bill2 = 555;
const bill3 = 44;

const tips = [calcTip(bill1), calcTip(bill2), calcTip(bill3)];

const total = [tips[0]+bill1, tips[1]+bill2, tips[2]+bill3];

console.log(total); */

// Coding Challenge #3

/* const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}`);
} */

// Coding Challenge #4

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    const len = arr.length;
    let total = 0;

    for (let i = 0; i < len; i++) {
        total += arr[i];
    }

    return total / len;
}

console.log(calcAverage(totals)); */