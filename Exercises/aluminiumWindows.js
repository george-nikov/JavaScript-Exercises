function aluminiumWindows (input) {

let count = Number(input[0]);
let type = input[1];
let delivery = input[2];
let total = 0;
let price = 0;

if (count < 10) {
    console.log(`Invalid order`);
    return;
    }

switch (type) {
case "90X130":
price = 110;
if (count > 60) {
price = price - price * 0.08;
}
if (count > 30) {
price = price - price * 0.05;
}
break;

case "100X150":
price = 140;
if (count > 80) {
    price = price - price * 0.10;
    }
else if (count > 40) {
    price = price - price * 0.06;
    }
break;

case "130X180":
price = 190;
if (count > 50) {
    price = price - price * 0.12;
    }
else if (count > 20) {
    price = price - price * 0.07;
    }
break;

case "200X300":
price = 250;
if (count > 50) {
    price = price - price * 0.14;
    }
else if (count > 25) {
    price = price - price * 0.09;
    }
break;
}

total = (price * count.toFixed(2));

if (delivery == "With delivery") {
total += 60;
}
else if (delivery == "Without delivery") {
total;
}

if (count >= 99) {
total = total - (total * 0.04);
}

console.log(`${total.toFixed(2)} BGN`);
}
aluminiumWindows(["105",
"100X150",
"With delivery"])
