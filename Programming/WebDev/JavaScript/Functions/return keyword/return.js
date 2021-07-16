function capitalize(str){

if(typeof str === "number"){

return(" This is not a string !")
}

return str.charAt(0).toUpperCase() + str.slice(1);

}
var city = "paris";
var capitalized = capitalize(city);

var num = 33;
var numb = capitalize(num);
console.log("paris");
console.log(capitalized);
console.log(33);
console.log(numb);