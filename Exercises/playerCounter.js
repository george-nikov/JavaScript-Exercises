function bestPlayer(input) {

    let index = 0;
    let current = input[index];
    let goals = 0;
    let maxGoals = 0;
    let maxIme;

    while (current !== "END" && index < (input.length*2)) {
        index++;
        goals = Number(input[index]);

        if (maxGoals < goals) {
            maxGoals = goals;
            maxIme = current;
        }

        index++;
        current = input[index];
    }

    console.log(`${maxIme} is the best player!`);
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}
bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])
