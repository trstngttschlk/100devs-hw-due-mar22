// Adding character experience
// TODO: create the character object here
const aurora = {
    name:'Aurora',
    health:150,
    strength:20,
    xp:0,
    describe() {
        return `The character ${this.name} has ${this.health} health, ${this.strength} strength, and ${this.xp} experience points.`
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());
//Modeling a dog
// TODO: create the dog object here
const dog = {
    name:'Brunello',
    species:'poodle / cane corso mix',
    size: 'not smol',
    bark(){
        return 'Woof! Woof!'
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
const r = Number(prompt("Enter the circle radius:"));
const circle = {
    circumference(){
        return 2*Math.PI*r;
    },
    area(){
        return Math.PI*(r**2);
    },
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
const account ={
    name:'Alex',
    balance:0,
    credit(amount){
        return this.balance += amount
    },
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    },
}
console.log(account.describe())
account.credit(250)
account.credit(-80)
console.log(account.describe())