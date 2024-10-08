function countFroyoFlavors(flavorsArray) {
    const flavorCount = {};

    flavorsArray.forEach(flavor => {
        flavor = flavor.trim().toLowerCase();
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    return flavorCount;
}

const userInput = prompt("Enter a list of frozen yougurt flavors:");

const flavorsArray = userInput.split(',');

const flavorCount = countFroyoFlavors(flavorsArray);

console.table(flavorCount);