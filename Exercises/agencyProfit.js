function agencyProfit (input) {

let name = input[0];
let adultTickets = Number(input[1]);
let kidsTickets = Number(input[2]);
let adultPrice = Number(input[3]);
let tax = Number(input[4]);
let kidsPrice = adultPrice - (0.70 * adultPrice);

let adultTotal = (adultPrice + tax) * adultTickets;
let kidsTotal = (kidsPrice + tax) * kidsTickets;

let total = adultTotal + kidsTotal;

let profit = total * 0.20;

console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
