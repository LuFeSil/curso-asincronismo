//#region Callback peraciones básicas
/* 
function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, addition));
console.log(calc(2, 2, subtraction));
console.log(calc(2, 2, multiplication));
console.log(calc(2, 2, division));
*/
//#endregion Callback peraciones básicas

//#region Callback setTimeout
/*
setTimeout(() => {
  console.log(`Hola JS`);
}, 2000);
*/
//#endregion

//#region Callback saludo
function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, "Luis");
//#endregion Callback saludo
