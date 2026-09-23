
const readline = require("readline");

function findMaximum(elements) {
    if (elements.length === 0) {
        return null;
    }
    return Math.max(...elements);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by spaces (e.g. 45 12 89 23 99): ", (input) => {
    const numbers = input
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter((val) => !isNaN(val));

    if (numbers.length === 0) {
        console.log("No valid numbers were provided.");
    } else {
        const maxValue = findMaximum(numbers);
        console.log("Array Elements :", numbers);
        console.log("Maximum Value  :", maxValue);
    }

    rl.close();
});

