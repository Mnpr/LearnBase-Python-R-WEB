/**
 * Primitive & Non-primitive Types | Composing Custom Types
 */

// 1. Primitive Types  (number, string, boolean, bigint, symbol, null, or undefined.)


// ----------*
//  Boolean   
// ----------*

let is: boolean = false;

// ----------*
//  Numbers   
// ----------*

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;


// ----------*
//  Strings   
// ----------*

let color: string = "teal";
color = "nord";

let fullName : string = `Focal Fossa`
let age: number = 19;
let sentence: string = `Hello, My name is ${fullName}. and i am ${age} years old `;

// OR

let sentence_same: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I am " +
  (age + 1) +
  " years old.";

// ----------*
//  Arrays   
// ----------*

let list: number[] = [1,2,3];
// (OR)
let list_new: Array<number> = [4,5,6];


// ----------*
//  Tuples    
// ----------*


let x: [string, number];

// init
x = ['hello', 10];
console.log(x[0].substring(4));


// ----------*
//  Enum      
// ----------*

enum Color {
    Red = 1                // Default numbering @0 but <-- can assi9gn manually 
    , Green = 2
    , Blue = 4
}

let c: Color = Color.Green
console.log(c)

// OR

enum Colors {
    Red = 1
    , Green
    , Blue
}

let colorName: string = Color[2];
console.log(colorName); // Green


// ----------*
//  Unknown  
// ----------*

let notSure: unknown = 4;
notSure = "maybe a string ?";

notSure = false; // Boolean for sure

// 'maybe' could be a string, object, boolean, undefined, or other types
declare const maybe: unknown;

const aNumber: number = maybe; // cannot assign unknown to numbner

if ( maybe == true ) {
    const aBoolean: boolean = maybe;
    const aString: string = maybe;
}

if ( typeof maybe === "string") {
    const aString: string = maybe;
    const aBoolean: boolean = maybe;
}

// ----------*
//  Any      
// ----------*

declare function getValue(key: string): any; // Return value of getValue is not checked
const str:string = getValue('myString');

let looselyTyped: any = 5;

// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();

// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();


let strictlyTyped: unknown = 4;
strictlyTyped.toFixed(); // toFixed() doesnot exist on type 'unknown'

let looselyTyped: any = {}

let d = looselyTyped.a.b.c.d;


// ----------*
//  Void     
// ----------*

// Like any : but the absence of having any time at all.

function warnUser(): void {             // return type of a function that donot return any value
    console.log("Warning Message !!") 
}

// can only assign null or undefined (if --strictNullChecks is not specified)
let unusable: void = undefined; 
unusable = null; 

// --------------------*
//  Null & Undefined   
// --------------------*

let u: undefined = undefined; 
let n: null = null;

/*
    However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown,
    any and their respective types (the one exception being that undefined is also assignable to void).
    This helps avoid many common errors. In cases where we want to pass in either a string or null or undefined,
    the union can be used :  type string | null | undefined.
*/


// ----------*
//  Never
// ----------*

function error( message: string): never {   // Function returning never must not have a reachable end point
    throw new Error(message);
}

function fail() {               // Inferred return type is never
    return error("Something went wrong :( ");
}

function infiniteLoop() {       // Function returning never must not have a reachable end point
    while (true) {

    }
}

/**
 * The never type represents the type of values that never occur. For instance, never is the return type 
 * for a function expression or an arrow function expression that always throws an exception or one that never returns.
 * 
 * Variables also acquire the type never when narrowed by any type guards that can never be true.
 * 
 * The never type is a subtype of, and assignable to, every type; however, no type is a subtype of,
 * or assignable to, never (except never itself).
 */


// ----------*
//  Object
// ----------*

declare function create(o: object | null) : void;

create({prop:0});
create(null);

create(42); // type number || boolean || other primitives exc. null is not assignable to object | nulll type


// ------------------*  Like Type-Casting
//  Type Assertion   >---------------------------------:*-*:
// ------------------*

let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

// OR

let anotherValue: unknown = "this is another string"
let strLength_an: number = (<string>anotherValue).length;



// ****************************************************************************************************************