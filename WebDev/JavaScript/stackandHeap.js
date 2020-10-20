// The Stack and the Heap

// Stack : ordered, part of Js runtime, keeps track of function Invocation

function multiply(x,y){
    return x * y;
}

var res = multiply(3,5); 

// stack frame : Information about the function that was invoced;
//              : the parameter that were passed to the function : 
//              : current line number;


// Definition : An ordered set of stack frames: 
// 1.   Most recently invoked function at top;
// 2.   First funciton invoked at the bottom of the stack;

// // -------------------------------------------------------------------------------


// Heap: area in memory
// eg: 

var obj = {firstName: "Sudesh", // The object is created in the heap  and the obj is reference to the object
            lastName: "Acharya"};


// New data is not created,
// only a copy of the reference
var referenceCopy = obj;



/// STACK example : 
