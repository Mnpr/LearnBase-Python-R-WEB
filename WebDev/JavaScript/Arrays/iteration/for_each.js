var kleidung = ["die schuhe","der Rock","der anzug","doe Gürtel","doe socken","doe sandalen","das hemd","das t-shirt","das kleid","der pulli","doe short","der mantel","die krawatte","die bluse","die jacke"]

function printKleidung(kleidung){

console.log("*************");
console.log(kleidung)
}

kleidung.forEach(printKleidung);
//we don't need to put the parenthesis because we don't  wan't to call the 
// function right away, we want the forEach to call it later for each elements
// in the kleidung array. :)