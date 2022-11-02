function space(width, length, hight, averageAustronautsHights) {
    
    width = Number(width);
    length = Number(length);
    hight = Number(hight);
    
    averageAustronautsHights = Number(averageAustronautsHights);
    let areaOfSpaceShip = width * length * hight;
    let areaOfOneRoom = (averageAustronautsHights + 0.40) * 2 * 2;
    let availablePlace = Math.floor(areaOfSpaceShip / areaOfOneRoom);
    
    if (availablePlace >= 3 && availablePlace <= 10) {
        console.log(`The spacecraft holds ${availablePlace} astronauts.`);
    }
    if (availablePlace < 3){
        console.log("The spacecraft is too small.");
    }
    if (availablePlace > 10){
        console.log("The spacecraft is too big.");
    }
}

space(3,
    3,
    4,
    1.68);
