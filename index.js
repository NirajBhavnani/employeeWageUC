console.log("Welcome to Employee Wage Program");

let emp_wage = 0;
let empHours = 0;
const fulltime = 8;
const parttime = 4;
const wageperhour = 20;
const isPartTime = 0;
const isFullTime = 1;

emp_case = isFullTime;
switch(emp_case){
    case isFullTime: //fulltime
        empHours = fulltime;
        break;

    case isPartTime: //parttime
        empHours = parttime;
        break;

    default:
        empHours = 0;
        break;
}

emp_wage = empHours * wageperhour;
console.log("Employee wage: "+emp_wage);