console.log("Question 1")
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
                { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
                { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
                { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
            ];

function studentWithHighestMarks(array) {
    let largestAvg = 0;
    let marks = 0;
    let total = 0;
    let avg = 0;
    let name;
    array.forEach((student) =>{
        marks = student.marks;
        total = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        avg = total / marks.length;
        console.log(`Student: ${student.name} Total average: ${avg}`);
        if (avg > largestAvg){
            largestAvg = avg;
            name = student.name;
        }        
    })
    
    return `${name} has the largest average\n`;
}
console.log(studentWithHighestMarks(student))

console.log("Question 2")
array = [20, -2, 4, -11, 0, 25, -12];

function minValue(array) {

    return Math.min(...array);

}

console.log(`The Minimum Value of ${array} is: ${minValue(array)}\n`);


console.log("Question 3")

let word = 'helloworld'

function lengthOfString(string) {
    let stringLength;
    stringLength = [...string];
    return stringLength.length;
} 

console.log(`The length of ${word} is ${lengthOfString(word)}`);