// The Sum of a Range
// let arr1 = []
// function range(start,end,step){
//     if (step) {
//         for(i=start;i<=end;i+=step){
//             arr1.push(i)
//         }
//     } else {
//         for(i=start;i<=end;i++){
//             arr1.push(i)
//         }
        
//     }
//     return arr1
// }

// function sum(arr){
//     let total = 0;
//     for (let i of arr){
//         total+=i;
//     }
//     return total;
// }


// console.log(range(1,10))
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(1,10,2))
// console.log(sum(range(1, 10)));
// // → 55

// Reversing an Array
// function reverseArray(arr){
//     let newArray = [];
//     arr.forEach(i=>newArray.unshift(i))
//     return newArray;
// }

// function reverseArrayInPlace(arr){
//     for (let i=0;i<=Math.floor(arr.length/2);i++){
//         let j = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = j
//     }
//     return arr
// }


// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// A List
function arrayToList(arr){
}