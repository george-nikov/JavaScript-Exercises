function souvenier(team, typeOfSouveniers, countOfPurch) {
    countOfPurch = Number(countOfPurch);
    let price = 0;
    let typeIsTrue = false;
    if (team === 'Argentina') {
        if (typeOfSouveniers === 'flags') {
            price = 3.25 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'caps') {
            price = 7.20 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'posters') {
            price = 5.10 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if( typeOfSouveniers === 'stickers') {
            price = 1.25 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else {
            console.log("Invalid stock!");
        }

    }
    else if (team == 'Brazil') {
        if (typeOfSouveniers === 'flags') {
            price = 4.20 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'caps') {
            price = 8.50 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'posters') {
            price = 5.35 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if( typeOfSouveniers === 'stickers') {
            price = 1.20 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else {
            console.log("Invalid stock!");
        }
    }
    else if (team === 'Croatia') {
        if (typeOfSouveniers === 'flags') {
            price = 2.75 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'caps') {
            price = 6.90 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'posters') {
            price = 4.95 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if( typeOfSouveniers === 'stickers') {
            price = 1.10 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else {
            console.log("Invalid stock!");
        }
    }
    else if (team === 'Denmark') {
        if (typeOfSouveniers === 'flags') {
            price = 3.10 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'caps') {
            price = 6.50 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if (typeOfSouveniers === 'posters') {
            price = 4.80 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else if( typeOfSouveniers === 'stickers') {
            price = 0.90 * countOfPurch;
            console.log(`Pepi bought ${countOfPurch} ${typeOfSouveniers} of ${team} for ${price.toFixed(2)} lv.`);
        }
        else {
            console.log("Invalid stock!");
        }
    }
    else {
        console.log("Invalid country!");
    }
}
souvenier('Denmark',
    'ugly',
    8);
