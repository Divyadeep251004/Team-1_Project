import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Array Elements: ", (input: string) => {
    const arr: number[] = input.trim().split(/\s+/).map(Number);

    let sum = 0;

    for (const value of arr) {
        sum += value;
    }

    const average = sum / arr.length;

    console.log("Average:", average);

    rl.close();
});