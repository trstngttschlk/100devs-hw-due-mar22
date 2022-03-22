// // Translate border-left-width to borderLeftWidth
/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

// function camelize(str){
//     let arrDash = str.split('-') // removes dashes and create an array arrDash
//     arrDash.forEach((item,index) => {
//         if (index > 0){
//             item = item.split('') // splits each word after first into letters and changes string -> array
//             item[0] = item[0].toUpperCase() // capitalizes the first letter of each word
//             item = item.join('') // changes array back into string
//             arrDash.splice(index,1,item) // removes 1 element at index with item
//         }
//     })
//     arrDash = arrDash.join('') // rejoins the string 
//     console.log(arrDash) // shows fully assembled camemCase string
// }

// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// // // Filter range
// /*
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.
// */
// function filterRange(arr,a,b){
//     let filtered = arr.filter(item => item >= a && item <= b)
//     return filtered
// }
// let arr = [5,3,8,1]
// console.log(filterRange(arr, 1, 4))
// console.log(arr)

// // Filter range "in place"
// // function filterRangeInPlace(arr,a,b){
// //     let found = arr.find(item=> item >= a && item <= b)
// //     arr.pop(found)
// // }
// // console.log(filterRangeInPlace(arr, 1, 4))
// // console.log(arr)

// // Sort in decreasing order
// arr = [5, 2, 1, -10, 8];
// arr.sort()
// arr.reverse()
// console.log(arr)

// // Copy and sort array
// arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(array){
//     let newArr = array.slice().sort()
//     return newArr
// }
// let sorted = copySorted(arr)
// alert(sorted)
// alert(arr)

// // Create an extendable calculator

// // Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(item=>item.name)
// alert(names);

// // Map to Objects
// john = { name: "John", surname: "Smith", id: 1 };
// pete = { name: "Pete", surname: "Hunt", id: 2 };
// mary = { name: "Mary", surname: "Key", id: 3 };

// users = [ john, pete, mary ];

// let usersMapped = users.map(user=> ({
//     fullName : `${user.name} ${user.surname}`,
//     id: user.id
// }));

// alert(usersMapped[0].id)
// alert(usersMapped[0].fullName)

// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array){
    array.sort(function(x,y){return x.age-y.age;})
}

sortByAge(arr)

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete