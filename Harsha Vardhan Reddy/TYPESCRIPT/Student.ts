class Student {
    private studentId: number;
    private studentName: string;
    private marks: number[];

    constructor(id: number, name: string, marks: number[]) {
        this.studentId = id;
        this.studentName = name;
        this.marks = marks;
    }

    public getAverage(): number {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    }

    public getGrade(): string {
        const avg = this.getAverage();

        if (avg >= 90) return "A+";
        if (avg >= 80) return "A";
        if (avg >= 70) return "B";
        if (avg >= 60) return "C";
        return "F";
    }

    public displayStudentCard(): void {
        console.log("==============================");
        console.log("         STUDENT REPORT       ");
        console.log("==============================");
        console.log(`ID      : ${this.studentId}`);
        console.log(`Name    : ${this.studentName}`);
        console.log(`Marks   : [${this.marks.join(", ")}]`);
        console.log(`Average : ${this.getAverage().toFixed(2)}`);
        console.log(`Grade   : ${this.getGrade()}`);
        console.log("==============================");
    }
}

const idInput = prompt("Enter Student ID:") || "";
const nameInput = prompt("Enter Student Name:") || "";
const marksInput = prompt("Enter Marks (space-separated):") || "";

const parsedMarks: number[] = marksInput
    .trim()
    .split(/\s+/)
    .map(m => Number(m))
    .filter(num => !isNaN(num));

const student = new Student(
    Number(idInput),
    nameInput,
    parsedMarks
);

student.displayStudentCard();