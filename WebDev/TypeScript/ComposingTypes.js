// ----------*
//  Unions   >---------------------------------:*_*:
// ----------*
// Handle different types array | string
function getLength(obj) {
    return obj.length;
}
// typeof [ Return different types ]
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else {
        return obj;
    }
}
//
var object = backpack.get();
console.log(typeof (object));
backpack.add('Hello nG');
