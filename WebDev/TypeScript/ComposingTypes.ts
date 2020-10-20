// ----------*
//  Unions   >---------------------------------:*-*:
// ----------*

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized" ;
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Handle different types array | string
function getLength( obj: string | string[] ) {

    return obj.length;
}


// typeof [ Return different types ]
function wrapInArray( obj: string | string[] ) {

    if(typeof obj === "string") {
        return [obj];
    } 
    else {
        return obj;
    }
}


// ----------*
//  Generics >---------------------------------:*-*:
// ----------*

// Variables to Types
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


// Declaring custom types 
interface  Backpack<Type> {
    add: (obj: Type ) => void;
    get: () => Type;
}

// constant : backpack
declare const backpack: Backpack<string>;

//

const object = backpack.get();
console.log(typeof(object));

backpack.add('Hello nG');


// -----------------------------*
//  Duck Typing | Structural Ty >---------------:*-*:
// -----------------------------*

