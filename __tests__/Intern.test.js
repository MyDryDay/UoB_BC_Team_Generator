// Allows the use of the Intern object class / constructor
const Intern = require('../lib/Intern');

// Tests the functionality of the object constructor / class itself
// Checks the outputted object for accuracy
describe('Intern', () => {
    it('Should assign the school name using the school given as a parameter', () => {
        const schoolTest = 'Birmingham City University';
        const internTest = new Intern('George', 314, 'emailTest@example.com', schoolTest);
        expect(internTest.school).toBe(schoolTest);
    });
});

// Engineer object method tests
describe('returnSchool', () => {
    it('Return the value associated with the school key from object', () => {
        const schoolTest2 = 'Birmingham City University';
        const internTest = new Intern('George', 314, 'emailTest@example.com', schoolTest2);
        expect(internTest.returnSchool()).toBe(schoolTest2); 
    });
});

describe('returnJob', () => {
    it('Returns the value associated with the returnJob method, in this case: "Intern"', () => {
        const jobTest = 'Intern';
        const internTest = new Intern('George', 314, 'emailTest@example.com', jobTest);
        expect(internTest.returnJob()).toBe(jobTest);
    });
});