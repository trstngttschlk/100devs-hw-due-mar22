// Hello, object
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)

// Check for emptiness
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
let schedule = {}
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sumSals(obj){
    let sum = 0;
    for (key in obj){
        sum+=obj[key]
    }
    return sum
}
console.log(sumSals(salaries))

// Multiply numeric property values by 2

function multiplyNumeric(obj){
    for (key in obj){ // iterates through objects
        if ((typeof obj[key]) == 'number'){ // checks if value is number
            obj[key] *= 2 // if number, multiplies value by 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  console.log(menu)
  multiplyNumeric(menu);
  console.log(menu)
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };