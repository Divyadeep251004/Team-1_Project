
const readline = require("readline");

function binarySearch(sortedArray, target) {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter sorted numbers separated by space (e.g. 10 23 35 48 59): ", (arrayInput) => {
    const numbers = arrayInput.trim().split(/\s+/).map(Number);

    rl.question("Enter number to search: ", (targetInput) => {
        const target = Number(targetInput);
        const index = binarySearch(numbers, target);

        if (index !== -1) {
            console.log(`Result: Element ${target} found at index ${index}.`);
        } else {
            console.log(`Result: Element ${target} not found in array.`);
        }

        rl.close();
    });
});

