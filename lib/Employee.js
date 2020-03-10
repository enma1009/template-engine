 class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
      getName() {
        //return this.name;
        console.log(this.name);
      }
      getId() {
        //return this.id;
        console.log(this.id);
      }
      getEmail() {
        //return this.email;
        console.log(this.email);
      }
      getRole() {
        //return "Employee";
        console.log("Employee");
      }
      
 };

//  const employee1 = new Employee("Thomas Bell", "0001", "thomas@email.com");

//  employee1.getName();
//  employee1.getId();
//  employee1.getEmail();
//  employee1.getRole();

 module.exports = Employee;