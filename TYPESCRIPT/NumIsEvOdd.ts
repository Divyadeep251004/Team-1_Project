import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const n: number = Number(input);

    if (n % 2 === 0)
        console.log("Even");
    else
        console.log("Odd");

    rl.close();
});