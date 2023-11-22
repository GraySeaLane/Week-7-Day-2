//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
}
console.log(person3)


const favFoods = (person) => {
    for(let key in person){
        const value = person[key]
        const sent = `My favorite ${key} is ${value}`
     
        console.log(sent)
        if(typeof value == "object" && !Array.isArray(value)){
            favFoods(value)
        } 
    }
}

favFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {

        this.name = name
        this.age = age
    this.printInfo = ()=> {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    this.addAge = (num)=>{
        this.age += num
        }
    }
}
const person1 = new Person('Joy', 39)
const person2 = new Person('Tom', 17)
person1.printInfo()
person2.printInfo()
person2.addAge(3)
person2.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function isLongWord(string) {
    return new Promise((resolve, reject) =>{
        if (string.length > 10){
            resolve(string);
        } else {
            reject(string);
        }
    })
}

isLongWord("Zoinks")
    .then((result) => {
        console.log(`Big Word: ${result}`)
    })
    .catch((error) => {
        console.log(`Small Number: ${error}`)
    })


// =============Exercise 4 CODEWARS============//
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 == 0) {
      return 'Even';
    } else {
      return `Odd`;
    }
  }


  // =============Exercise 5 CODEWARS============//
  //Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
  
  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }