var person = {
  firstName: "Henry",
  lastName: "Nichols",
  hobby: "Coding"
};
var fullName = person.firstName + ' ' + person.lastName
person.job = "Coder"
person.perviousJob = "Cashier"

var myCar = {
  make: "Tesla",
  model: "Model 3",
  year: "2021",
}
myCar['owner'] = fullName
myCar['color'] = "black"


console.log(person)
console.log("The person's name is:",fullName + ".")
console.log("The person's current job is:",person.job + ".")
console.log("The person's pervious job is:",person.perviousJob + ".")
console.log(person)
console.log(myCar)
console.log('My name is' + ' ' + myCar['owner'] + " " + "and I drive a" + " " + myCar ['year'] + " " + myCar['make'] + " " + myCar['model'])
console.log("My full car info:", myCar)
