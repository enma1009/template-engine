const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
      }
      getRole() {
        //return "Intern";
        console.log("Intern");
      }  
      getSchool() {
        //return "this.school";
        console.log(this.school);
      }  
};

// const intern1 = new Intern("Charlie Brown", "0552", "charlieb@email.com","FIU");

// intern1.getName();
// intern1.getId();
// intern1.getEmail();
// intern1.getRole();
// intern1.getSchool();
