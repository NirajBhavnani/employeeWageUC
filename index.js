console.log("Welcome to Employee Wage Program");

let emp_wage = 0;
let empHours = 0;
const fulltime = 8;
const parttime = 4;
const wageperhour = 20;

emp_case = Math.floor(Math.random()*10)%3;
empHours = getHours(emp_case);
emp_wage = empHours * wageperhour;
console.log("Employee wage: "+emp_wage);

function getHours(emp_case){

    switch(emp_case){
        case 1: //fulltime
           empHours = fulltime;
           break;

        case 0: //parttime
            empHours = parttime;
            break;

        default:
            empHours = 0;
            break;
    }
    return empHours;
}