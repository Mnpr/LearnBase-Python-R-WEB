function printLabel( labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj)

// -----------------*
//  using interface   
// -----------------*

interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj = { size:10, label: "Size 10 object"};
printLabel(myObj);

// -------------------*
//  Optional Properties   
// -------------------*

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare( config: SquareConfig ): { color: string; area: number } {
    
    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width; 
    }
    return newSquare;
}

let mySquare = createSquare({width: 20});
console.log(mySquare);


// --------------------*
//  Readonly Properties   
// --------------------*

// Some properties should only be modifiable when an object is first created.

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x:10, y:20};
p1.x = 4; // readonly

// TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed

let a: number[] = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a;

ro[0] = 9; // No mutation ( readonly )
ro.push(5); // push doesnot exist on type readonly number[]
ro.length = 100; // readonly
a = ro; //type 'readonly number[]' cannot be assigned to mutable type 'number[]'


a = ro as number[]; // assigning readonly back to normal array is legal

// Variable use 'const' whereas properties use 'readonly'

//-----------------------------------*
//  Excess Property Checks
//-----------------------------------*

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area:number  } {
    return { color: config.color || "red", area: config.width ? config.width * config.width : 20}
}

let mySquare = createSquare({ colour: "red", width: 100});
console.log(mySquare)


//-----------------------------------*
//  Interface declaration with class
//-----------------------------------*

// Explicit description
interface User {
    name: string;
    id: number;
};


class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id:number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Sally", 1);

console.log(user.name);


// Use Interface to annotate ${x} to functions:
//-------------------------------------------

// x. Return Values
function getAdminUser(): User {
    // ...
}

// x. Parameters 
function deleteUser( user: User) {
    // ...
}