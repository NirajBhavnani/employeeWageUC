const EmployeePayrollData = class{
    constructor(id=0, name="default", salary=0){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get empId(){
        return this.id;
    }

    get empName(){
        return this.name;
    }

    get empSalary(){
        return this.salary;
    }

    set setEmpName(name){
        this.name = name;
    }

    set setEmpSalary(salary){
        this.salary = salary;
    }
};

const Emp = new EmployeePayrollData(1, 'Niraj', '100000');

Emp.setEmpName = "Niraj Bhavnani";
Emp.setEmpSalary = 150000;

console.log("Employee Details: ");
console.log(`Name => ${Emp.empName}, ID => ${Emp.empId}, Salary => ${Emp.empSalary}`);