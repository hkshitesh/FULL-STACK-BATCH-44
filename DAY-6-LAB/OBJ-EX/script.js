// const student = {
//     name: "Amit",
//     age: 32,
//     gen: "Male",
//     subjects: ["Data Structure","Python", "Java"],
//     printStudent: function()
//     {
//         console.log("Name is: "+student.name+ " Age is "+student.age+" Gender is "+student.gen+ " Subjects are: "+student.subjects);
//     }
// }

// console.log("Name is: "+student.name);
// console.log("Age is: "+student.age);
// console.log("Gender is: "+student.gen);
// console.log("Subjects are: "+student.subjects);

// student.printStudent();

// student.name="Kapil";
// student.subjects.push("JavaScript");
// student.printStudent();

// const students = [
//     { id: 1, name: 'Alice', grade: 90 },
//     { id: 2, name: 'Bob', grade: 80 },
//     { id: 3, name: 'Charlie', grade: 95 },
//     { id: 4, name: 'David', grade: 75 },
// ];
// console.log(students);
// const passingStudents = students.filter(student => student.grade >= 80);
// console.log('Passing Students:', passingStudents);


const students = [
    { id: 1, name: 'Alice', grade: 90 },
    { id: 2, name: 'Bob', grade: 80 },
    { id: 3, name: 'Charlie', grade: 95 },
    { id: 4, name: 'David', grade: 75 },
];

const updatedStudents = students.map(student => {
    return {        
        result: student.grade >= 80 ? 'Pass' : 'Fail', 
    };
});

console.log('Original Students:', students);
console.log('Updated Students:', updatedStudents);
