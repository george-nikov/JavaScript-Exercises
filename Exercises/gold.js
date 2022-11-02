function gold(input) {
    let index = 0;
    let totalExtraction = 0;
    let averagePerDay = 0;
    let numberOfLocations = Number(input[index++]);
    for(let i = 1; i <= numberOfLocations; i++) {
        let expectedAverageExtraction = Number(input[index++]);
        let daysCount = Number(input[index++]);
        for(let j = 1; j <= daysCount; j++) {
            let currentDay = Number(input[index++]);
            totalExtraction += currentDay;
        }
        averagePerDay = (totalExtraction / daysCount);
        if (averagePerDay >= expectedAverageExtraction) {
            console.log(`Good job! Average gold per day: ${averagePerDay.toFixed(2)}.`);
            totalExtraction = 0;
            averagePerDay = 0;
        }
        else if (averagePerDay < expectedAverageExtraction){
            let notEnoughGold = (expectedAverageExtraction - averagePerDay);
            console.log(`You need ${notEnoughGold.toFixed(2)} gold.`);
            totalExtraction = 0;
            averagePerDay = 0;
        }
    }
}
gold([
    '2',
    '10',
    '3',
    '10',
    '10',
    '11',
    '20',
    '2',
    '20',
    '10']);
