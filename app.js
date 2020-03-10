const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let teamMembers = [];

console.log("Welcome to the Team Generator CLI app!");

function addNewMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select the team member's rank:",
            name: "rank",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
      ]).then(function(response) {
        let rank = response.rank;
        switch(rank) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                console.log("There was an error, please restart the app.");
          }
      });
};

addNewMember();

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the team member's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team member's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team member's email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team member's office number:"
        }
      ]).then(function(response) {
        const newManager = new Manager(response.name,response.id,response.email,response.officeNumber);
        teamMembers.push(newManager);
      //  console.log(teamMembers);
        inquirer.prompt({type: "confirm", name: "confirm", message: "Do you want to add another member?"}).then(
            function(response) {
                if(response.confirm) {
                    addNewMember();
                } else {
                    let htmlData = render(teamMembers);
                    displayTeam(htmlData);
                }
            }
        );
      });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the team member's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team member's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team member's email:"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the team member's GitHub username:"
        }
      ]).then(function(response) {
        const newEngineer = new Engineer(response.name,response.id,response.email,response.github);
        teamMembers.push(newEngineer);
        //console.log(teamMembers);
        inquirer.prompt({type: "confirm", name: "confirm", message: "Do you want to add another member?"}).then(
            function(response) {
                if(response.confirm) {
                    addNewMember();
                } else {
                    let htmlData = render(teamMembers);
                    displayTeam(htmlData);
                }
            }
        );
      });
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the team member's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team member's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team member's email:"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the team member's school name:"
        }
      ]).then(function(response) {
        const newIntern = new Intern(response.name,response.id,response.email,response.school);
        teamMembers.push(newIntern);
       // console.log(teamMembers);
        inquirer.prompt({type: "confirm", name: "confirm", message: "Do you want to add another member?"}).then(
            function(response) {
                if(response.confirm) {
                    addNewMember();
                } else {
                    let htmlData = render(teamMembers);
                    displayTeam(htmlData);
                }
            }
        );
      });
};

function displayTeam(htmlData) {
    fs.writeFile(outputPath, htmlData, function(err) {
        if(err) {
            return console.log(error);
        } 
        console.log("Your Team Roster has been generated. Open 'team.html' in your browser to see it.");
    })
};



