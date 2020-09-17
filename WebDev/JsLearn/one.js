// ES6 Tutorial : ..........................................................xxx


// Exploring the difference between var and let
let name = "sudesh ";
let name = "acharya"; // should throw an error

console.log(name);

function printManyTimes (str) {
    "use strict";
    var sentence = str + " is Cool !!";

    for (var i= 0; i < str.length; i++) {
        console.log(sentence);
    }
}

printManyTimes("Sudesh");

///----------------- creating immutable objects with Object.freeze(); -----------------------------

let obj = {
    name:"Sudesh",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; // will be ignored. Mutation not allowed
  obj.newProp = "Test"; // will be ignored. Mutation not allowed
  console.log(obj); 


  ///----------Using arrow function to write concise anonymous function------------------------------
  const myFunction = function (){
      const myVar = "valueOfVariable";
      return myvar;
  }
  //   === >>> ES6
const myFunction = () => {
    const myVar = "valueOfVariable";
    return myVar;
}

// when only return value as a function body then;
const myFunction = () => "hello";

// Writing arrow function with parameters;

const doubler = (item) => item *2; // const doubler = item => item*2
doubler(3);

const multiplier = (item, anotherItem) => item*anotherItem;
multiplier(2,4);


const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));


// Setting Default parameter for the function

function greeting (name = "Anonymous"){
    return "Hello " + name;
}
greeting();


// using the Rest parameter with function parameter

const howManyArgs = (...args) => "you have passed " + args.length + " arguments. ";

/// use of map(), filter(), reduce() to args.array 

// sum of any number of arguments
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(1, 2, 3)); // 6

// using spread operator to evaluate arrays in place
//ES5
var arr = [1,2,3,5,7,88];
var maxim = Math.max.apply(null, arr); //88


//ES6
const arr = [1,2,34,5,6,77];
const maxim = Math.max(...arr);

//copy the item of arr to arr1
arr1 = [...arr];
console.log(arr1)


// Using destructuring assignment to extract values from objects
//ES5
const user = { name : "sudesh", age: 25};

const name = user.name;
const age = user.age;

//ES6 ----------------------------------------
const {name , age } = user;

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow } = HIGH_TEMPERATURES;

// Using Destructuring assignment to assign variables from objects

const user = {name : "sudi", age: 25}; // this can be done as : 

const {name : userName, age : userAge} = user; //useName = Sudi, userAge = 35

//
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
     
  const {today: highToday,tomorrow: highTomorrow}  = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
// extract the values and assign them to variables with the same name
const {today: {low,high}} = LOCAL_FORECAST;
 
//variables with different name ;
const {today: {low: lowToday, high: highToday }} = LOCAL_FORECAST;
   
console.log(lowToday); // should be 64
console.log(highToday);

//Use Destructuring Assignment to Assign Variables from Arrays



