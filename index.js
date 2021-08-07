console.log("Welcome to Employee Wage Program");

{
    
    const fulltime = 8;
    const parttime = 4;
    const wageperhour = 20;
    const maxHrsMonth = 160;
    const maxDaysMonth = 20;
    var totalEmpHrs = 0;
    var totalWorkDays = 0;
    
    while(totalEmpHrs < maxHrsMonth && totalWorkDays < maxDaysMonth){
        totalWorkDays++;
        var emp_case = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getHours(emp_case);
    }


    var emp_wage = totalEmpHrs * wageperhour;
    console.log("Day: "+ totalWorkDays+ " EmpHr: " + totalEmpHrs+ " EmpWage: "+emp_wage);

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

}