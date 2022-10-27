function addingLuggage (input) {

let over20Price = Number(input[0]);
let kilos = Number(input[1]);
let days = Number(input[2]);
let count = Number(input[3]);
let money = 0;

if (kilos < 10) {
money = over20Price * 0.20;
}
else if (kilos <= 20) {
money = over20Price * 0.50;
}
else {
money = over20Price;
}

if (days < 7) {
money = money * 1.40;
}
else if (days <= 30) {
money = money * 1.15;
}
else if (days > 30) {
money = money * 1.10;
}

let total = (money * count);

console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}
addingLuggage (["30",
"18",
"15",
"2"])
	
