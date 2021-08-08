/*  Program:    Testing with Evaluations in returns
    Developer:  Bart Verschooren
    Date:       06/08/2021
*/

// Declarations

// functions

function checkEval(val){
    return val > 0 ? "positive" : val < 0 ? "negative" : "zero";
}

console.log(checkEval(0));