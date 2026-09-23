
const readline = require("readline");

class Person {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }

    displayBasicInfo() {
        console.log(`Name: ${this.fullName}, Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(fullName, age, employeeId, department) {
        super(fullName, age);
        this.employeeId = employeeId;
        this.department = department;
    }

    displayEmployeeDetails() {
        console.log(`ID: ${this.employeeId} | Department: ${this.department}`);
    }
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter Employee Full Name: ", (name) => {
    rl.question("Enter Age: ", (age) => {
        rl.question("Enter Employee ID: ", (id) => {
            rl.question("Enter Department: ", (dept) => {
                const emp = new Employee(name, Number(age), id, dept);

                console.log("\n--- Employee Profile ---");
                emp.displayBasicInfo();
                emp.displayEmployeeDetails();

                rl.close();
            });
        });
    });
});

