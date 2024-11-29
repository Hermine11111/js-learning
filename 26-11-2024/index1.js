// Problem 1: Student Grades
// Description:
// You are provided with an array of students, where each student is represented as an object. Each object contains the student’s name and their score.
// Your task is to determine the grade status of each student using a for loop and a switch statement.
// The grade categories are as follows:
// i >= 90 → “Excellent”
// i >= 75 → “Good”
// i >= 50 → “Pass”
// default → “Fail”
// Data example
// const students = [
//   { name: "Anna", grade: 85 },
//   { name: "Mariam", grade: 92 },
//   { name: "Olivia", grade: 76 },
//   { name: "Emma", grade: 59 },
// ];


const students = [
    { name: "Anna", grade: 85 },
    { name: "Mariam", grade: 92 },
    { name: "Olivia", grade: 76 },
    { name: "Emma", grade: 59 },
  ];

for(let i = 0; i < students.length; i++) {
    let gradeStatus;
    switch (true) {
        case students[i].grade >= 90:
          gradeStatus = "Excellent";
          break;
        case students[i].grade >= 75:
          gradeStatus = "Good";
          break;
        case students[i].grade >= 50:
          gradeStatus = "Pass";
          break;
        default:
          gradeStatus = "Fail";
      }
      console.log(`${students[i].name}: ${gradeStatus}`);
    }

