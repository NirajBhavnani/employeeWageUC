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

const Emp = new EmployeePayrollData(1, 'Aditya', '100000');

Emp.setEmpName = "Aditya Uphade";
Emp.setEmpSalary = 150000;

console.log("Employee Details: ");
console.log(`Name => ${Emp.empName}, ID => ${Emp.empId}, Salary => ${Emp.empSalary}`);

console.log("****************** EXTENDED EMPLOYEE DATA ******************");
const NewEmployeePayrollData = class extends EmployeePayrollData{
    constructor(...params) {
        super(...params.slice(0,3));//For the first 3 params
        this.gender = params[3];
        this.joinDate = params[4];
    }

    get empGender(){
        return this.gender;
    }

    get empJoinDate(){
        return this.joinDate;
    }

    set setEmpGender(gender){
        this.gender = gender;
    }

    set setEmpJoinDate(jDate){
        this.joinDate = jDate;
    }
};

const Emp2 = new NewEmployeePayrollData(2, 'Darshan', 150000, 'Male', '1 August 2021');

Emp2.setEmpJoinDate = '2 August 2021';

console.log("New Employee Details: ");
console.log(`Name => ${Emp2.empName}, ID => ${Emp2.empId}, Salary => ${Emp2.empSalary}`);

var nameRegex = /^[A-Z][a-zA-Z]{2}(\w+)?$/;
if(nameRegex.test(Emp2.empName)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}

var gReg = /^(male|Male|female|Female)$/;

if(gReg.test(Emp2.gender)){
    console.log('Valid (for Gender)');
}
else{
    console.log('Invalid (for Gender)');
}