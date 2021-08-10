let con = require('./constants')

console.log("Welcome to Employee Wage Program");

{
    var totalEmpHrs = 0;
    var totalWorkDays = 0;
    var wageArray = [];
    var totalWage = 0;
    
    while(totalEmpHrs < con.maxHrsMonth && totalWorkDays < con.maxDaysMonth){
        totalWorkDays++;
        var emp_case = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getHours(emp_case);
    }

    //a. Calc total Wage using Array forEach or reduce method
    wageArray.forEach((num) => {
        totalWage = totalWage + num;
    });

    console.log("Total Wage: "+totalWage);

    //b. Show the Day along with Daily Wage using Array map helper function
    let daysVar = wageArray.map((wage, day) => {
        return {
            days: day+1,
            wage,
        };
    })
    console.log(daysVar);

    //c. Show Days when Full time wage of 160 were earned using filter function
    let reqWage = daysVar.filter(day => day.wage===160);
    console.log("Filter(=160) : ");
    console.log(reqWage);

    //d. Find the first occurrence when Full Time Wage was earned using find function
    let first = daysVar.find(day => day.wage===160);
    console.log("First Occurence: ");
    console.log(first);

    //e. Check if Every Element of Full Time Wage is truly holding Full time wage
    checkFullTime(daysVar);
    function checkFullTime(elems){
        var myElem = elems.filter(day => day.wage===160);
        myElem.forEach(element => {
            if(element['wage']===160){
                console.log('True');
            }
        });
    }

    //f. Check if there is any Part Time Wage
    let reqWage2 = daysVar.filter(day => day.wage===80);
    console.log("Part Time(=80) : ");
    console.log(reqWage2);

    //g. Find the number of days the Employee Worked
    let reqWage3 = daysVar.filter(day => day.wage!==0);
    console.log("Employee was worked for (!=0) : ");
    var no = reqWage3.length;
    console.log(no+" days");

    //map data structure
    wagesMap = new Map();
    for(let day = 1; day<=20; day++){
        wagesMap.set(day, wageArray[day-1]);
    }
    wagesMap.set('Total Wage', totalWage);
    console.log(wagesMap);



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