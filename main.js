console.log("Hello, RIP to the chicks")
let literalDay = new Date().toString()
console.log(literalDay)
let today = literalDay.split(" ")[0]
console.log(today)

// today = "Fri"

switch (today) {
    case 'Sun':
        console.log("Do Homework, and deal with the existential crisis of the impending Monday")
        break;
    case "Mon":
        console.log("Homework again and lots of coffee")
        break;
    case "Tue":
        console.log("Go for a hike and eat some tacos, not necessarily in that order.....and homework")
        break;
    case "Wed":
        console.log("Crying and homework and also wine and art and questioning life decisions")
        break;
    case "Thu":
        console.log("Linedancing and mini sports")
        break;
    case "Friday":
        console.log("Music Garage, also comedy club and eating pizza and then a concert and shots. Black Friday shopping in the morning")
        break;
    case "Sat":
        console.log("Playing Soccer or Football at the park and then cleaning the house and laundry and cooking")
    default:
        console.log("Not a day, please try again")
}

//Creation of JavaScript Objects
// these are dictionaries in python
let person = {
    "name": "Steve",
    "age": "65",
    "fav_color": "blueish purple",
    "clothes": {
        "shirt": "green button up shirt",
        "pants": "gray slacks",
        "hat": "hes current not wearing a hat"        
    },
    "back-end": "Python"
}
console.log(person['name'])
console.log(person.age)
console.log(person['back-end'])

let person2 = {
    "name": "Jake",
    "age": "35",
    "hobbies": ["yoga", "sells insurance", "play smash", "guitar"],
    "favColor": "magenta",
    "sportTeams": [
        {
            "South Africa": "Spring Bocks"
        },
        {
            "Los Angeles": "Lakers"
        },
        {
            "Minnesota": "Vikings"
        },
        {
            "Upstate": "State Farmers"
        }
    ]
}


console.log(person2)
// JavaScript Keys from an object
console.log(Object.keys(person2))

//looping through keys in an object
for (const key of Object.keys(person2)) {
    console.log(key)
}

// looping through keys by index
for (let i in Object.keys(person2)){
    console.log(Object.keys(person2)[i])
}

//values from a javascript object
// Object.values(person2)
console.log(Object.values(person2))


// accessing key and value pairs from a javascript object
// console.log(Object.entries(person2))
for (let [key, value] of Object.entries(person2)){
    console.log(`${key}, ${value}`)
}

//Checking if a value in an object is an array
//if it is, loop through the array and console.log each item 
for (const value of Object.values(person2)){
    if (Array.isArray(value)) {
        for (const thing of value) {
            console.log(thing)
        }
    }else {
        console.log(value)
    }
}


for (const [key, value] of Object.entries(person2)) {
    if (Array.isArray(value)) {
        console.log(`${key}: `)
        value.forEach(thing => console.log(thing))
    } else{
        console.log(`${key}: ${value}`)
    }
}


//Object Prototype -- The old OOP ES5
function Car(make, model, year){
    // setting object prototype attributes
    // self.make = make
    this.make = make;
    this.model = model;
    this.year = year;

    // method inside of object prototype
    this.printInfo = (wheels = 4) => {
        console.log(`This is a ${this.year}, ${this.make} ${this.model} and has ${wheels} wheels`)
        return "sick car brah"
    }    
}

let myCar = new Car("Chevy", "Lumina", "1997")

console.log(myCar)
console.log(myCar.make)
console.log(myCar['model']) //console.log(myCar.model)- this works too

myCar.printInfo(6)


// JavaScript Classes

class Human {
    //similar to the __init__ method in python
    constructor(name, age, hobby){
        this.age = age
        this.name = name
        this.hobby = hobby
    }

    printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age} \nHobbies: ${this.hobby}`
    }
}

let link = new Human('Link', 24, 'build stuff, break pots, save hyrule, yell hyaahhhhh')
console.log(link.printInfo())
console.log(link.age)
console.log(link['hobby'])

//JavaScript Inheritants
// extends keyword

class Baby extends Human {
    constructor(name, age, hobby, walking) {
        // user super to inherit attributes from parent class
        super(name, age, hobby)
        // attribute unique to the bb class
        this.walking = walking
        // walking is a boolean based on if the baby is walking or not
    }

    // new method unique to the bb class
    isBabyWalking = () => {
        if (this.walking == true) {
            return `Oh lawd, ${this.name} is a comin`
        }else {
            return `${this.name} isn't walking yet....thank goodness`
        }
    }
}

let theBaby = new Baby("Jack Jack", "1 year old", "turning into a fire demon, causing general mischief, tormenting the baby sitter", false)
//accessing printInfo method from the parent class
console.log(theBaby.printInfo())
console.log(theBaby.isBabyWalking())


// --JavaScript Closure-- //
/**
 * 
 * A closure is a self-invoking function that only runs once.
 * it can then set a variable(which in our case will be a counter) and 
 * returns a function expression
 * 
 * For the example below, we will add to a number after the 
 * initial call to the closure has been made 
 * 
 * JavaScrupt Closures are another tupe of variable that can be created
 */

let countUp = (function (){
    let counter = 1 //function scoped variable
    console.log("hit")
    return function () {
        console.log(counter)
        return counter ++
    }
})()

// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */

// example of javascript event loop
function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

// first()
// second()


// what happens when we delay the first function?
function firstDelay() {
    // simulate a delay of 2 seconds
    setTimeout(() => {
        console.log(1)
    }, 2000)
}

firstDelay()
second()

//cool stuff

// // callback function
// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework!`)
//     callback()
// }


// doHomework('JavaScript', () =>{
//     console.log("Done with homework")
// })

/*
Though callbacks give us more functionaloty...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
})

*/


// JavaScript Promises
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) =>{
        if (num % 2 == 0){
            resolve(num)
        } else {
            reject(num)
        }
    })
}

isEvenNumber(9)
// happy path resolves
    .then((result) => {
        console.log(`Even number. Great job: ${result}`)
    })
    .catch((error) => {
        console.log(`boooo off number: ${error}`)
    })


// asynchronous functions
// using async and await

function slowAddition(n1, n2){
    return new Promise((resolve) => {
        setTimeout(() => {resolve(n1 + n2)}, 3000)
    })
}

function increaseSalary(base, increase) {
    const newSalary = slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

increaseSalary(40000, 10000)

//async --> precedes a function and makes that function asynchronous
// await --> that tells the function to wait for a previous function to resolve before finishing

async function asyncSalary(base, increase) {
    const newSalary = await slowAddition(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// asyncSalary(50000, 10000)

