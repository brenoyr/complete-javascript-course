/*

// Coding Challenge #1

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight/(markHeight ** 2);
let johnBMI = johnWeight/(johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76

markBMI = markWeight/(markHeight ** 2);
johnBMI = johnWeight/(johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Coding Challenge #2

let message;

if (markBMI > johnBMI) {
    message = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`
} else {
    message = `Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`
}

console.log(message);
*/

// Coding Challenge #3

// data 1:
/* dolphinsScore1 = 96;
dolphinsScore2 = 108;
dolphinsScore3 = 89;
koalasScore1 = 88;
koalasScore2 = 91;
koalasScore3 = 110; */

// data bonus 1:
/* dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123; */

// data bonus 2:
/* dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106; */

/*

dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAvg, koalasAvg);

if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("Tie!");
} else if ((dolphinsAvg > koalasAvg) && dolphinsAvg >= 100) {
    console.log("Dolphins win!");
} else if ((dolphinsAvg < koalasAvg) && koalasAvg >= 100) {
    console.log("Koalas win!");
} else {
    console.log("100 points minimum not reached");
}


// Coding Challenge #4

const bill = 275;
// const bill = 40;
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);

*/