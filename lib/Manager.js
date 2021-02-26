// Importing 'Employee.js' to give access to it
const Employee = require('./Employee');

// Setting Intern as a child-class of Employee, thus giving Intern access to Employee object methods
class Manager extends Employee {
    constructor (name, id, email, office){
        super(name, id, email);
        this.office = office;
    }
    returnJob(){
        return 'Team Manager';
    }
    returnOffice(){
        return this.office;
    }
}

module.exports = Manager;