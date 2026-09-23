import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a Number: ", (input: string) => {
    const num = Number(input);

    if (num % 2 === 0)
        console.log("Even");
    else
        console.log("Odd");

    rl.close();
});