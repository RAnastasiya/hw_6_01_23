/*
Напишіть, яка приймає число, і визначає чи парне воно (повертає булевий тип).
 */
const number = 4;

if(checkNumber(number)) {
    console.log(isEven(number));
} else {
    console.log("Error, value must be number");
}
/**
 * 
 * @param {number} number 
 * @returns {boolean}
 */
function isEven(number) {
   return Boolean(number % 2 === 0);
}
/**
 * 
 * @param {any} value 
 * @returns {boolean}
 */
function checkNumber(value){
    const checkValue = value === '' || value === null || Number.isNaN(Number(value))
    return !checkValue;
}
