// var graph = "";
// for (var i = 0; i < 1; i++) {
//     for (var j = 0; j < 5; j++) {
//         var graph = graph + '*';
//         console.log(graph);
//     }
// }


// var graph = "";
// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(" FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(" Fizz");
//     } else if (i % 5 === 0) {
//         console.log(" Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else {
//         console.log(i);
//     }
// }


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

var name=prompt("Enter student's name:");
var score=prompt("Enter score");

document.write(`<p>Student's name: ${name}</p><p>Grade = ${assignGrade(score)}</p>`);