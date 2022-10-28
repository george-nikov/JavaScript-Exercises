function balls(input) {

    let n = input[0];
    let index = 1;
    let current = input[index];
    let points = 0;

    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blackCounter = 0;
    let defaultCounter = 0;

    for (index = 1; index <= n; index++) {
        current = input[index];
        switch (current) {
            case "red":
                points += 5;
                redCounter++;
                break;
            case "orange":
                points += 10;
                orangeCounter++;
                break;
            case "yellow":
                points += 15;
                yellowCounter++;
                break;
            case "white":
                points += 20;
                whiteCounter++;
                break;
            case "black":
                points = Math.floor(points/2);
                blackCounter++;
                break;
            default:
                points;
                defaultCounter++;
                break;
        }

    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${defaultCounter}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}
balls(["3",
"white",
"black",
"pink"])
