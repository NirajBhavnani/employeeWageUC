//Ability to check the name starts with capital and has at least 3 characters - Use Regex Pattern 
var nameStr = "Niraj";
var nameRegex = /^[A-Z][a-zA-Z]{2}(\w+)?$/;

if(nameRegex.test(nameStr)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}

//case 2 :the gender is M or F
var gender = "M";
var gReg = /^[mfMF]$/;

if(gReg.test(gender)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}