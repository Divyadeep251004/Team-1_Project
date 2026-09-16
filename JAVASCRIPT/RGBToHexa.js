const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter R G B values: ", input => {
    let [r, g, b] = input.trim().split(/\s+/).map(Number);

    let hex = "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();

    console.log(hex);
    rl.close();
});