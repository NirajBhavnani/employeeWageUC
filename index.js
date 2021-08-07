console.log("Welcome to Employee Wage Program");

let empHours = 0;
const fulltime = 8;
const parttime = 4;
const wageperhour = 20;
const days = 30; //Calculating for a month

for(var d=0; d<days; d+=1){
    var emp_case = Math.floor(Math.random()*10)%3;
    empHours += getHours(emp_case);
}

var emp_wage = empHours * wageperhour;
console.log("Total Hours: "+ empHours+ " Employee Wage: " + emp_wage);

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