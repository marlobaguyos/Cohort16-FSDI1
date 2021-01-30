


var multiplier = 9;

for(var i=0;i<10;i++){
    var result=multiplier*i;
    console.log(i + "*" + multiplier + " = " + result );
}

//Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade(score){
    if (score>=90){
        return 'A';
    }else if (score >=80){
        return 'B';
    }else if (score >= 70){
        return 'C';
    }else if (score >= 60){
        return 'D';
    }else {
        return 'F';
    }
}

for(var i=80;i<=100;i++){
    var studentGrade = assignGrade(i);
    console.log(i + "=" + studentGrade);
}


//World translator
function helloWorld(lang){
    if(lang==='en'){
        return 'Hello World';
    }else if(lang=== 'es'){
        return 'Hola mundo';
    }else if(lang=== 'fr'){
        return 'Bonjour tout le monde';
    }else if(lang=== 'it'){
        return 'Ciao tutto il mundo';
    }else {
        return 'invalid language';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('es'));
console.log(helloWorld('it'));
console.log(helloWorld('pt'));


// Write a function named greaterNum that:takes 2 arguments, both numbers.returns whichever number is the greater (higher) number.
//Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


function greaterNum(num1,num2){
    if(num1>num2){
        return num1;
    }else if(num1==num2){
        return num1 + 'and' + num2 + 'are equal'
    }else{
        return num2;
    }
}

console.log(greaterNum(2,2) + ' is greater');
console.log(greaterNum(6,4) + ' is greater');


