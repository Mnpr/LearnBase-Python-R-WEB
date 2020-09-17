
// Call back funciton 
function callbackFunction(){
    console.log("i am inside the callback funciton");
}
function higherOrder (fun){
    console.log("higher before callback");
    fun();
    console.log("higher after callback");
}
higherOrder(callbackFunction);

// code reuse using callbacks:

function sendMessage(msg, fun){
    return fun(msg);
}
sendMessage("hello", alert);
sendMessage("message ", console.log);

//callbacks with function declarations:

function greet (name, fun){
    return "Hello " + fun(name);
}

function convToUpper(name){
    return name.toUpperCase();
}
greet(sudesh, convToUpper);

// callbacks with anonymous function

function greet (name ,uppercase){
    return "Hello " + uppercase(name);
}

greet("Sudesh ", function (name){
    return name.toUpperCase();
});

greet("sudesh", function(name){
    return name + "!!";
});