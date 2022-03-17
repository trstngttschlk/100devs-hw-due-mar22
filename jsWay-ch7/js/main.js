// // Musketeers
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
let musketeers = ['Athos', 'Pathos', 'Aramis']
// Shows each array element using a for loop.
for (i=0;i<musketeers.length;i++){
    console.log(musketeers[i])
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan")
// Shows each array element using the forEach() method.
musketeers.forEach(musketeer => console.log(musketeer))
// Remove poor Aramis.
musketeers.pop('Aramis')
// Shows each array element using a for-of loop.
for(const musketeer of musketeers){
    console.log(musketeer)
}

// // Sum of Values
const values = [3,11,7,2,9,10]
let sum = 0;
for (i=0;i<values.length;i++){
    sum += values[i]
}
console.log(sum)

// // Array Maximum
console.log(Math.max(...values))

// // List of words
// asks for words from user & repeats prompt until stop
let userInput 
let words = []

do {
    userInput = prompt("please enter a word. to stop please write 'stop'")
    words.push(userInput)
} while (userInput !== 'stop')

if (words[words.length-1] === 'stop'){
    words.pop(words[words.length-1])
}

console.log(words)