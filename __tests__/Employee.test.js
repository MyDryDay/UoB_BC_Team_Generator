const Employee = require('../lib/Employee');

// Tests the functionality of the object constructor / class itself
// Checks the outputted object for accuracy
describe('Employee', () => {
    it('Should create a employeeTest object', () => {
        const employeeTest = new Employee();
        expect(typeof (employeeTest)).toBe('object');
    });

    it('Should assign the name using the name given as a parameter', () => {
        const nameTest = 'George';
        const employeeTest = new Employee(nameTest);
        expect(employeeTest.name).toBe(nameTest);
    });

    it('Should assign the ID number using the number given as a parameter', () => {
        const idTest = '314';
        const employeeTest = new Employee('George', idTest);
        expect(employeeTest.id).toBe(idTest);
    });

    it('Should assign the email using the email given as a parameter', () => {
        const emailTest = 'emailTest@example.com';
        const employeeTest = new Employee('George', 314, emailTest);
        expect(employeeTest.email).toBe(emailTest);
    });

    it('Should create a filled employeeTest object', () => {
        const employeeTest = new Employee('George', 314, 'emailTest@example.com');
        expect(employeeTest).toMatchObject({
            name: 'George',
            id: 314,
            email: 'emailTest@example.com'
        });
    });
});

// Employee object method tests
describe('returnName', () => {
    it('Returns the value associated with the name key from object', () => {
        const nameTest = 'George';
        const employeeTest = new Employee(nameTest);
        expect(employeeTest.returnName()).toBe(nameTest);
    });
});

describe('returnID', () => {
    it('Returns the value associated with the id key from object', () => {
        const idTest = '314';
        const employeeTest = new Employee('George', idTest);
        expect(employeeTest.returnID()).toBe(idTest);
    });
});

describe('returnEmail', () => {
    it('Returns the value associated with the email key from object', () => {
        const emailTest = 'emailTest@example.com';
        const employeeTest = new Employee('George', 314, emailTest);
        expect(employeeTest.returnEmail()).toBe(emailTest);
    });
});

describe('returnJob', () => {
    it('Returns the value associated with the returnJob method, in this case: "Employee"', () => {
        const jobTest = 'Employee';
        const employeeTest = new Employee('George', 314, 'emailTest@example.com');
        expect(employeeTest.returnJob()).toBe(jobTest);
    });
});