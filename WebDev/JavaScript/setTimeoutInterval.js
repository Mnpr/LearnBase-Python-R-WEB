// write asynchronous code using setTimeout && setInterval 

// setTimeout:  fn that asynchronously invokes a callback after a delay in miliseconds

function callback() {
    console.log("callback function")
}
var delay = 1000;
setTimeout(callback, delay);

// OR

setTimeout(function(){
    console.log("runs in approx 2000 ms");
}, 2000 );


/// Canceling setTimeout

var timerId = setTimeout(function(){
    console.log("runs in approx 20 s");
}, 20000 );

setTimeout(function(){
    console.log("cancelling the first setTimeout", timerId);
    clearTimeout(timerId);   
}, 2000);


////............................................................................
// setTimeInterval: fn that continuously invokes the callbacks after
// every X ms, where X is provided to setInterval

function callback() {
    console.log("callback function")
}
var repeat = 1000;
setTimeout(callback, repeat);

// eg:
var num = 0;
setInterval(function(){
    num ++;
    console.log("num: ", num );
}, 1000 );

// cancel setInterval:


var num = 0;
var intervalId = setInterval(function(){
    num ++;
    console.log("num: ", num );
    if(num === 3){
        clearInterval(intervalId);
    }
}, 1000 );
