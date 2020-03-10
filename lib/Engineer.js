const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
      }
      getRole() {
        return "Engineer";
        //console.log("Engineer");
      }  
      getGithub() {
        return this.github;
       // console.log(this.github);
      }  
};

module.exports = Engineer;

// const engineer1 = new Engineer("Jane Dallas", "0012", "janed@email.com","janed33");

// engineer1.getName();
// engineer1.getId();
// engineer1.getEmail();
// engineer1.getRole();
// engineer1.getGithub();
