// Importing necessary dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Initialising empty array to hold generated employee objects
const employeeArr = [];

// // Function to initialise the app
function init(){
    initialHTML();
    addManager();
}

// Functions to generate HTML
function initialHTML(){
    const content = `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <title>Team Information</title>
        </head>  
        <body>

            <section class="jumbotron jumbotron-fluid bg-dark text-success text-center shadow-lg">
            <div class="container">
                <h1>Meet the team!</h1>
            </div>
        </section>
        <main class="container">
            <div class="row">
        `;

    // Here, an HTML file is created in the specified location with the above content
    fs.writeFile('./dist/index.html', content, function (error){
        if (error) {
            console.log(error);
        }
    });
}

function employeeProfiles(obj){
    return new Promise(function (resolve, reject){
        // Assigning varibale names to properties form the obj parameter
        const name = obj.returnName();
        const id = obj.returnID();
        const email = obj.returnEmail();
        const role = obj.returnJob();

        // Initialising an empty string
        let profileHTML = '';
        if (role === 'Engineer') {
            // If Engineer, then a variable has to be assigned to the returnGit method from obj parameter
            const github = obj.returnGit();
            profileHTML = `
            <div class="col d-sm-flex justify-content-center">
                <div class="card border-0 mt-4 shadow-lg">
                    <div class="card-header bg-dark text-success border-0">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2 text-white"></i>Engineer</h3>
                    </div>
                    <div class="card-body bg-dark">
                        <ul class="list-group shadow">
                            <li class="list-group-item bg-dark text-success">ID: ${id}</li>
                            <li class="list-group-item bg-dark text-success">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item bg-dark text-success">GitHub: <a href="https://github.com/${github}" target="none">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
        } else if (role === 'Intern') {
            // If Intern, then a variable has to be assigned to the returnSchool method from obj parameter
            const school = obj.returnSchool();
            profileHTML = `         
            <div class="col d-sm-flex justify-content-center">
                <div class="card border-0 mt-4 shadow-lg">
                    <div class="card-header bg-dark text-success border-0">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2 text-white"></i>Intern</h3>
                    </div>
                    <div class="card-body bg-dark">
                        <ul class="list-group shadow">
                            <li class="list-group-item bg-dark text-success">ID: ${id}</li>
                            <li class="list-group-item bg-dark text-success">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item bg-dark text-success">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>              
            `;
        } else if (role === 'Manager') {
            // If Manager, then a variable has to be assigned to the returnOffice method from obj parameter
            const officeNum = obj.returnOffice();
            profileHTML = `
            <div class="col d-sm-flex justify-content-center">
                <div class="card border-0 mt-4 shadow-lg rCorners">
                    <div class="card-header bg-dark text-success border-0">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2 text-white"></i>Manager</h3>
                    </div>
                    <div class="card-body bg-dark">
                        <ul class="list-group shadow">
                            <li class="list-group-item bg-dark text-success">ID: ${id}</li>
                            <li class="list-group-item bg-dark text-success">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item bg-dark text-success">Office Number: ${officeNum}</li>
                        </ul>
                    </div>
                </div>
            </div>    
            `;
        }
        console.log("Info added!");
        // Before, an HTML was created and had some content written to it
        // Here, we append the profileHTML content to the end of the already existing HTML document in the specified directory
        fs.appendFile('./dist/index.html', profileHTML, function (error){
            if (error) {
                return reject(error);
            };
            return resolve();
        });
    });
}

function htmlScript() {
    const scriptHTML = `
            </div>
        </main>  
                
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/a9b8b749c3.js" crossorigin="anonymous"></script>
        </body>
    </html>
    `;

    fs.appendFile("./dist/index.html", scriptHTML, function (error){
        if (error) {
            console.log(error);
        };
    });
    console.log("Success");
}

// // Functions for client input
function addNew(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'addNew',
            message: 'Who would you like to add next?',
            choices: [
                'Engineer', 
                'Intern', 
                'I have finished creating the team'
            ]
        },
    ]).then(function ({addNew}){
        if(addNew === 'Engineer'){
            return addEngineer();
        } else if(addNew === 'Intern'){
            return addIntern();
        } else{
            htmlScript();
        }
    });
}

function addManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Team Manager\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Team Manager\'s ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Team Manager\'s email address:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter the Team Manager\'s office number:'
        },
    ]).then(function ({name, id, email, office}){
        let manager = new Manager(name, id, email, office);
        employeeArr.push(manager);
        employeeProfiles(manager);
        addNew();
    });
}


function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the chosen Engineer\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the chosen Engineer\'s ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the chosen Engineer\'s email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the chosen Engineer\'s GitHub username:'
        },
    ]).then(function ({name, id, email, github}){
        let engineer = new Engineer(name, id, email, github);
        employeeArr.push(engineer);
        employeeProfiles(engineer);
        addNew();
    });
}

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the chosen Intern\'s name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the chosen Intern\'s ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the chosen Intern\'s email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school atttended by the chosen Intern:'
        },
    ]).then(function ({name, id, email, school}){
        let intern = new Intern(name, id, email, school);
        employeeArr.push(intern);
        employeeProfiles(intern);
        addNew();
    });
}


init();
