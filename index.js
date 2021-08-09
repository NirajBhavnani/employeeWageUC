let con = require('./constants')
var totalEmpHrs = 0;
var totalWorkDays = 0;

class Employee{
    constructor(){
        //Welcome message
        this.message();
    }

    message(){
        console.log("Welcome to Employee Wage Program");
        
        this.calculateWage();
    }

    calculateWage(){
        while(totalEmpHrs < con.maxHrsMonth && totalWorkDays < con.maxDaysMonth){
            totalWorkDays++;
            var emp_case = Math.floor(Math.random()*10)%3;
            totalEmpHrs += this.getHours(emp_case);
        }
    
        var emp_wage = totalEmpHrs * con.wageperhour;
        console.log("Day: "+ totalWorkDays+ " EmpHr: " + totalEmpHrs+ " EmpWage: "+emp_wage);
    }

    getHours(emp_case){

        switch(emp_case){
            case 1: //fulltime
               this.empHours = con.fulltime;
               break;
    
            case 0: //parttime
                this.empHours = con.parttime;
                break;
    
            default:
                this.empHours = 0;
                break;
        }
        return this.empHours;
    }
}

let newEmp = new Employee();