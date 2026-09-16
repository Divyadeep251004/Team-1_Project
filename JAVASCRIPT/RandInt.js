const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter minimum and maximum: ", input => {
    let [min, max] = input.trim().split(/\s+/).map(Number);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Random number:", result);
    rl.close();
});