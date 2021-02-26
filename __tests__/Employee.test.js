// const Employee = require('../lib/Employee');

// describe('Employee', () => {
//     it('Should create a employeeTest object', () => {
//         const employeeTest = new Employee();
//         expect(typeof (employeeTest)).toBe('object');
//     });

//     it('Should assign the name using the name given as a parameter', () => {
//         const nameTest = 'George';
//         const employeeTest = new Employee(nameTest);
//         expect(employeeTest.name).toBe(nameTest);
//     });

//     it('Should assign the ID number using the number given as a parameter', () => {
//         const idTest = '314';
//         const employeeTest = new Employee('George', idTest);
//         expect(employeeTest.id).toBe(idTest);
//     });

//     it('Should assign the email using the email given as a parameter', () => {
//         const emailTest = 'emailTest@example.com';
//         const employeeTest = new Employee('George', 314, emailTest);
//         expect(employeeTest.email).toBe(emailTest);
//     });

//     it('Should create a filled employeeTest object', () => {
//         const employeeTest = new Employee('George', 314, 'emailTest@example.com');
//         expect(employeeTest).toMatchObject({
//             name: 'George',
//             id: 314,
//             email: 'emailTest@example.com'
//         });
//     });
// });
