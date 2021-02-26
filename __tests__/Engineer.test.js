// Allows the use of the Engineer object class / constructor
const Engineer = require('../lib/Engineer');

// Tests the functionality of the object constructor / class itself
// Checks the outputted object for accuracy
describe('Engineer', () => {
    it('Should assign the github username using the github given as a parameter', () => {
        const githubTest = 'MyDryDay';
        const engineerTest = new Engineer('George', 314, 'emailTest@example.com', githubTest);
        expect(engineerTest.github).toBe(githubTest);
    });
});

// Engineer object method tests
describe('returnGit', () => {
    it('Return the value associated with the github key from object', () => {
        const githubTest2 = 'MyDryDay';
        const engineerTest = new Engineer('George', 314, 'emailTest@example.com', githubTest2);
        expect(engineerTest.returnGit()).toBe(githubTest2); 
    });
});

describe('returnJob', () => {
    it('Returns the value associated with the returnJob method, in this case: "Engineer"', () => {
        const jobTest = 'Engineer';
        const engineerTest = new Engineer('George', 314, 'emailTest@example.com', 'MyDryDay');
        expect(engineerTest.returnJob()).toBe(jobTest);
    });
});
