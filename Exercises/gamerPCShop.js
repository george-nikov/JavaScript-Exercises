function gamerPC (input) {

let games = input[0];
let index = 1;
let current = input[index];
let heartCounter = 0;
let fortniteCounter = 0;
let overwatchCounter = 0;
let othersCounter = 0;

for (index = 1; index <= games; index++) {
    current = input[index];
    switch (current) {
        case "Hearthstone":
            heartCounter++;
            break;
        case "Fornite":
            fortniteCounter++;
            break;
        case "Overwatch":
            overwatchCounter++;
            break;
        default:
            othersCounter++;
            break;

    }
}

let percentHeart = (heartCounter / games) * 100;
let percentFortnite = (fortniteCounter / games) * 100;
let percentOverwatch = (overwatchCounter / games) * 100;
let percentOthers = (othersCounter / games) * 100;

console.log(`Hearthstone - ${percentHeart.toFixed(2)}%`);
console.log(`Fornite - ${percentFortnite.toFixed(2)}%`);
console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
console.log(`Others - ${percentOthers.toFixed(2)}%`);

}
gamerPC(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
