let con = require('./constants')

console.log("Welcome to Employee Wage Program");

{
    var totalEmpHrs = 0;
    var totalWorkDays = 0;
    var wageArray = [];
    
    while(totalEmpHrs < con.maxHrsMonth && totalWorkDays < con.maxDaysMonth){
        totalWorkDays++;
        var emp_case = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getHours(emp_case);
    }

    console.log("Wages for each day: "+wageArray);
    console.log("Total Hours:"+totalEmpHrs+" Total Workdays:"+totalWorkDays);

    function getHours(emp_case){

    switch(emp_case){
        case 1: //fulltime
           empHours = con.fulltime;
           break;

        case 0: //parttime
            empHours = con.parttime;
            break;

        default:
            empHours = 0;
            break;
    }
    dayWage = empHours * con.wageperhour;
    wageArray.push(dayWage);
    return empHours;
}

}