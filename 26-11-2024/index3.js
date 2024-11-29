// Problem 3: Employee Departments
// Description:
// You are given an array of employees, where each employee has a name and a department. Your task is to determine how many employees work in each department.
// Data example
// const employees = [
//     { name: "Karen", department: "HR" },
//     { name: "John", department: "IT" },
//     { name: "Margarita", department: "HR" },
//     { name: "Aram", department: "Finance" },
//     { name: "Nina", department: "IT" }
// ];

// const departmentCount = {};


const employees = [
    { name: "Karen", department: "HR" },
    { name: "John", department: "IT" },
    { name: "Margarita", department: "HR" },
    { name: "Aram", department: "Finance" },
    { name: "Nina", department: "IT" }
];

const departmentCount = {};

for (let i = 0; i < employees.length; i++) {
    const department = employees[i].department;
    if (departmentCount[department]) {
        departmentCount[department]++;
    } else {
        departmentCount[department] = 1;
    }
}
console.log(departmentCount);