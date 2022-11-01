function toyShop(input) {
    let index = 0;
    let adultsCounter = 0;
    let kidsCounter = 0;
    let toysCounter = 0;
    let sweatersCounter = 0;
    let currentInput = input[index];
    while (currentInput !== "Christmas") {
        currentInput = Number(currentInput);
        if (currentInput <= 16) {
            kidsCounter++;
            toysCounter += 5;
        }
        else if (currentInput > 16) {
            adultsCounter++;
            sweatersCounter += 15;
        }
        index++;
        currentInput = input[index];
    }
    console.log(`Number of adults: ${adultsCounter}`);
    console.log(`Number of kids: ${kidsCounter}`);
    console.log(`Money for toys: ${toysCounter}`);
    console.log(`Money for sweaters: ${sweatersCounter}`);
}
toyShop(['16',
    '20',
    '46',
    '12',
    '8',
    '20',
    '49',
    'Christmas']);
