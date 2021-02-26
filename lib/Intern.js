// Importing 'Employee.js' to give access to it
const Employee = require('./Employee');

// Setting Intern as a child-class of Employee, thus giving Intern access to Employee object methods
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    returnJob(){
        return 'Intern';
    }
    returnSchool(){
        return this.school;
    }
}

module.exports = Intern;