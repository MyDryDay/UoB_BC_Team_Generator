// Allows the use of the Manager object class / constructor
const Manager = require('../lib/Manager');

// Tests the functionality of the object constructor / class itself
// Checks the outputted object for accuracy
describe('Manager', () => {
    it('Should assign the office number using the office number given as a parameter', () => {
        const officeTest = '60223';
        const managerTest = new Manager('George', 314, 'emailTest@example.com', officeTest);
        expect(managerTest.office).toBe(officeTest);
    });
});

// Manager object method tests
describe('returnOffice', () => {
    it('Return the value associated with the office key from object', () => {
        const officeTest2 = '60223';
        const managerTest = new Manager('George', 314, 'emailTest@example.com', officeTest2);
        expect(managerTest.returnOffice()).toBe(officeTest2); 
    });
});

describe('returnJob', () => {
    it('Returns the value associated with the returnJob method, in this case: "Team Manager"', () => {
        const jobTest = 'Team Manager';
        const managerTest = new Manager('George', 314, 'emailTest@example.com', jobTest);
        expect(managerTest.returnJob()).toBe(jobTest);
    });
});