// function.js
function sun(a, b) {
  return a + b;
}
console.log(sun(1, 2));
//////////

// function expression
const sun2 = function (a, b) {
  return a + b;
};

console.log(sun2(1, 2));
//////////
// arrow function
const div = (a, b) => {
  //block
  return a / b;
  //
};
console.log(div(6, 2));
////////
// in line one the block
const reminder = (a, b) => a % b;
console.log(reminder(5,6));

///////
const person = {
    firstname : "Ahmad",
    lastname : "Qosa",
    gpa : 3,
    fullname : function (){
        return `${this.firstname} ${this.lastname}`;
    }

}
console.log(person.fullname());



