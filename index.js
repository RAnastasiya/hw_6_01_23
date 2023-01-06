//  1
// const userInput = prompt('Enter number: ', 5);

// if(userInput === '' || userInput === null || Number.isNaN(Number(userInput))) {
//     console.log("Error");
// } else {
//     console.log('userInput - ', userInput);
// }


// // declaration (можно вызывать до ее обьявления)
// function logNameFunction1 () {
//     console.log("name: logNameFunction1");
// };
// logNameFunction1();
// // expression (нельзя вызывать до ее обьявления)
// const logNameFunction2 = function() {
//     console.log("name: logNameFunction2");
// };
// logNameFunction2();


// function logSumTwoUserInputNumber () {
//     const num1 = prompt('Enter number 1: ', 5);
//     const num2 = prompt('Enter number 2: ', 5);
//     const checkUserInput1 = num1 === '' || num1 === null || Number.isNaN(Number(num1));
//     const checkUserInput2 = num2 === '' || num2 === null || Number.isNaN(Number(num2));
//     if(checkUserInput1 || checkUserInput2) {
//         console.log("Error, value must be number");
//     } else {
//         const summa = Number(num1) + Number(num2);
//         console.log(summa);
//     }
// }
// logSumTwoUserInputNumber();


// const num1 = prompt('Enter number 1: ', 5);
// const num2 = prompt('Enter number 2: ', 5);
// debugger;
// if(checkNumber(num1) && checkNumber(num2)) {
//     console.log(getSumTwoNumber(Number(num1), Number(num2)));
// } else {
//     console.log("Error, value must be number");
// }
// /**
//  * 
//  * @param {number} number1 
//  * @param {number} number2 
//  * @returns {number}
//  */
// function getSumTwoNumber(number1, number2) {
//     return number1 + number2;
// }
// /**
//  * 
//  * @param {any} value 
//  * @returns {boolean}
//  */
// function checkNumber(value){
//     const checkValue = value === '' || value === null || Number.isNaN(Number(value))
//     return !checkValue;
// }

const value1 = "-63";
const value2 = "-3";

console.log(getMaxValue(value1, value2));

/**
 * 
 * @param {any} value1 
 * @param {any} value2 
 * @returns {any | null}
 */
function getMaxValue(value1, value2) {
    if(typeof value1 === typeof value2) {
        if(value1 > value2){
            return value1;
        }
        return value2;
    } else {
        return null;
    }
}
