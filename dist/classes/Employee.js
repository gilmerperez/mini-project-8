// Note that the above is explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary file. The classes will be referred correctly after the dist folder is generated.
//Class to create Employee and implements Work interface
class Employee {
    constructor(name, id, title, salary) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
    receivePay(pay) {
        return pay;
    }
}
export default Employee;
