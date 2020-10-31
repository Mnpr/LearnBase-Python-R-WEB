// Named function
function add(x:number, y:number) : number {
    return x + y;
}

// Anonymous function
let myAdd = function (x:number, y:number): number {
  return x + y;
};

// parameter lineup
let myAdd1: (x:number, y:number) => number = function (x:number, y: number): number { 
    return x + y;
}

// inteffing the types
let myAdd2 = function (x:number, y: number) {
    return x + y;
}

// Contextual typing (form of type inference)
let myAdd3: (basevalue: number, increment: number) => number = function (x,y) {
    return x + y;
}


/**
 * Optional and Default Parameters
 */

 function buildName(firstName: string, lastName?: string) {

    if (lastName) return firstName + " " + lastName;
    else return firstName;
}


let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");

let result3 = buildName("Bob", undefined); 


function buildName(firstName: string, lastName = "Smith") {
    // ...
}

/**
 * Rest Parameter
 */

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


function buildName(firstName: string, ...restOfName: string[]) {
    return  firstName + " " + restOfName.join(" "); 
}

let buildNameFun: (fname:string, ...rest: string[]) => string = buildName;

/**
 * This " "
 */

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"]
    , cards: Array(52)
    , createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
  
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
  
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/**
 * this parameter in callbacks
 */


