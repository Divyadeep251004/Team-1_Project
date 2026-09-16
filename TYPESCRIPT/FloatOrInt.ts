const amount = Number(prompt("Enter a number:"));

if (Number.isInteger(amount))
    console.log("Integer");
else
    console.log("Floating-point");