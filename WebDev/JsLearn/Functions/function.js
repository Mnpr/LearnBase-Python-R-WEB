//first example simple function
function singSong(){
console.log("Are you sleeping, are you sleeping");
console.log("Brother John, brother John");
console.log("Morning Bells are ringing, morning Bells are ringing");
console.log("DING ! DING ! DONG !");
}

for(i=0; i<=2; i++){

singSong();
console.log("\n");

}

//Function with simple argument

function sayHello(name){

console.log("Hello there "+ name + " !");

}


//Function with multiple arguments
console.log("please Enter email, phone and country in the format \"email\", \"phone\", \"country\"");
function checkMe(email, phone, country){

if(email == undefined || phone == undefined || country == undefined ){

console.log(" Please fill out all the information");
}
else{
console.log(" Thank you for the registration ");

}
}
