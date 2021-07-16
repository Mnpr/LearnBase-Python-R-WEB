function printLabel(labeledObj: { label: string }) {
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

function printLabeled(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

myObj = { size: 10, label: "Size 10 object" };
printLabeled(myObj);

// -------------------*
//  Optional Properties   
// -------------------*

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {

    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ width: 20 });
console.log(mySquare);


// --------------------*
//  Readonly Properties   
// --------------------*

// Some properties should only be modifiable when an object is first created.

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 4; // readonly

// TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed

let a: number[] = [1, 2, 3, 4, 5];
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

function createSquare_1(config: SquareConfig): { color: string; area: number } {
    return { color: config.color || "red", area: config.width ? config.width * config.width : 20 }
}

mySquare = createSquare_1({ colour: "red", width: 100 });
console.log(mySquare)

mySquare = createSquare_1({ width: 100, opacity: 0.5 } as SquareConfig);


interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { color: "red", width: 100 }
mySquare = createSquare_1(squareOptions);


//-----------------------------------*
//  Function Types
//-----------------------------------*

// Use Interface to annotate ${x} to functions:
//-------------------------------------------

// x. Return Values
function getAdminUser(): User {
    // ...
}

// x. Parameters 
function deleteUser(user: User) {
    // ...
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src, sub) {

    let result = src.search(sub);
    return result > -1;
};


//-----------------------------------*
//  Indexable Types
//-----------------------------------*

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Alice", "Bob"];

let myStr: string = myArray[0];

// ------------------------

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

//----------------------------

interface NumberDictionry {
    [index: string]: number | string;
    length: number;
    name: string;
}

//-----------------------------------*
//  Readonly index signatures
//-----------------------------------*

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let my_Array: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "ZeroCool";


//-----------------------------------*
//  Class Types
//-----------------------------------*

// Interfaces describe the public side of the class

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) { }
}



// Difference between the static and instance sides of classes

interface ClockConstructor {
    new(hour: number, minute: number)
}

interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor
    , hour: number
    , minute:number

) : ClockInterface {

    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor( h:number, m:number ) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor( h:number, m:number ) { }
    tick() {
        console.log("tick tock")
    }
    
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 4, 56);


// Simplifying

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {

    constructor( h:number, m: number) {}
    tick() {
        console.log('Beep Beep');
    }
}

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

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Sally", 1);

console.log(user.name);


//-----------------------------------*
//  Extending Interfaces
//-----------------------------------*

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;

square.color = "blue";
square.sideLength = 10;


//-----------------------------------*
//  Hybrid Types
//-----------------------------------*

interface Counter {
    (start: number) : string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    
    let counter = function (start: number){} as Counter;
    counter.interval = 111;
    counter.reset = function () {};
    return counter;
}

let c = getCounter();

c(10);
c.reset();
c.interval = 5.0;

//-----------------------------------*
//  Interfaces Extending Types
//-----------------------------------*

class Control {
    private state: any;
}

interface SelectControl extends Control {
    select() : void;
}

class Button extends Control implements SelectControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

class AnControl implements SelectControl {
    
    private state: any;
    select() {}
}

/**
 *  The AnControl class has it’s own state private member rather than extending Control,
 *  so it cannot implement SelectableControl.
 */