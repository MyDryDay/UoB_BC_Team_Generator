const Employee = require("./Employee");

// Importing 'Employee.js' to give access to it
const Employee = require('./Employee');

// Setting Engineer as a child-class of Employee, thus giving Engineer access to Employee object methods
class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    returnJob(){
        return 'Engineer';
    }
    returnGit(){
        return this.github;
    }
}

module.exports = Engineer;