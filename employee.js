#!/usr/bin/env node
import inquirer from 'inquirer';
// Prompt user for employee details
async function EmployeeDetails() {
    const answers = await inquirer.prompt([
        { message: "Enter employee name:", type: "input", name: "name" },
        { message: "Enter base salary:", type: "number", name: "baseSalary" },
        { message: "Enter days attended:", type: "number", name: "attendance" }
    ]);
    class Employee {
        name;
        baseSalary;
        attendance;
        constructor(name, baseSalary, attendance) {
            this.name = name;
            this.baseSalary = baseSalary;
            this.attendance = attendance;
        }
        calculateSalary() {
            let salary = this.baseSalary;
            if (this.attendance >= 20 && this.attendance <= 25) {
                // Increase salary by 5% if attendance is between 20 and 25 days
                salary *= 1.05;
            }
            else if (this.attendance < 20) {
                // Decrease salary by 10% if attendance is less than 20 days
                salary *= 0.9;
            }
            return salary;
        }
        displayDetails() {
            console.log(`Name: ${this.name}`);
            console.log(`Base Salary: ${this.baseSalary}`);
            console.log(`Attendance: ${this.attendance} days`);
            console.log(`Salary: ${this.calculateSalary()}`);
            console.log("---------------------------");
        }
    }
    // Create an instance of the Employee class with user input
    let employee = new Employee(answers.name, answers.baseSalary, answers.attendance);
    // Display details for the employee
    console.log("Employee Details:");
    employee.displayDetails();
}
// Call the function to prompt for employee details
EmployeeDetails();
