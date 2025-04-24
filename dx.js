//Demo: Spread-operator
function sum(...args) {
let sum = 0;
for (let arg of args) sum += arg;
return sum;
}

let x = sum(2, 12, 15, 23, 42, 36, 77, 98, 85);

console.log(x);

//Maps
const fruits = new Map([
    ["peach", 20],
    ["avocado", 30],
    ["apple", 30],
    ["watermelon", 20],
    ["pineapples", 20],
]);

console.log(fruits);


//Replica double
 const double = (x) => {
    return x * 2;
 }
console.log(double(6.2));


//What's in the box
function buildCrate() {
    let contents = "grapes";
    
    return function checkCrate() {
        console.log(`Crate contains: ${contents}`);
        contents = "nothing";
    };
}
const theCrate = buildCrate();
theCrate();
theCrate();


//Sets
const sentence = new Set();
sentence.add('This');
sentence.add('is');
sentence.add('really');
sentence.add('something');
sentence.add('huh!');

console.log(sentence);


//Demonstrating array prototypes
const numbersCount = [
    {firstname: "Dave", grade: 45},
    {firstname: "Susan", grade: 70},
    {firstname: "Felicia", grade: 36},
    {firstname: "Diana", grade: 64},
    {firstname: "Veronica", grade: 14},
    {firstname: "Lucas", grade: 72},
    {firstname: "Loise", grade: 88},
    {firstname: "Hope", grade: 20},
    {firstname: "Martin", grade: 27},
    {firstname: "Clide", grade: 52},
    {firstname: "Alicia", grade: 187},
    {firstname: "Fredrick", grade: 26}
]

const sumOfCount = numbersCount
.map(numbersCount => numbersCount.grade)
.filter(grade => grade >= 50)
.reduce((prev, next) => prev + next, 0);

console.log(sumOfCount)


//Arrival
function friendArrival(message) {
    console.log("Friend is on the way...");
    setTimeout(() => {
    message("Get ready!")
}, 0);
}
function phone(chimes) {
    console.log("Message:", chimes);
}
friendArrival(phone);
