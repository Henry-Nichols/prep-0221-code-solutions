function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
  function convertHoursToMinutes(number) {
    return number * 60
}
function personalizeGreeting(name) {
  return 'Hello' + ' ' + name
}
function addAndMultiplyBy5(num1, num2){
  return (num1 + num2) * 5
}
function multiplyAndDivideBy5(num1, num2){
  return (num1 * num2) / 5
}
function subtractTwoNumbers(num1, num2){
  return (num1 - num2)
}

function getCircleCircumference(radius){
  return ( 3.14 * 2) * radius
}


function getFullName(firstName, lastName){
  return (firstName + " " +lastName)
}
function cube(number){
  return number * number * number
}


console.log(addTwoNumbers(4, 4));
console.log(convertHoursToMinutes(2))
console.log(personalizeGreeting('World!'))
console.log(addAndMultiplyBy5(10, 5))
console.log(multiplyAndDivideBy5(35, 10))
console.log(subtractTwoNumbers(22,7))
console.log(getCircleCircumference(5))
console.log(getFullName("Juan", "Ramirez"))
console.log(cube(5))
