const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
      }
      getRole() {
        return "Manager";
        //console.log("Manager");
      }  
      getOfficeNumber() {
        return this.officeNumber;
        //console.log(this.officeNumber);
      }  
};

module.exports = Manager;

// const manager1 = new Manager("Maria Rodriguez", "0005", "maria@email.com","786-456-7789");

// manager1.getName();
// manager1.getId();
// manager1.getEmail();
// manager1.getRole();
// manager1.getPhone();
