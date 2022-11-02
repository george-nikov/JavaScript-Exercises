function speed(averageSpeed, fuelFor100) {

    averageSpeed = Number(averageSpeed);
    fuelFor100 = Number(fuelFor100);

    let distance = 768800;
    let time = Math.ceil(distance / averageSpeed);
    let totalTime = time + 3;
    let totalFuel = (fuelFor100 * distance) / 100;

    console.log(totalTime);
    console.log(totalFuel);
}
speed(15000,4);
