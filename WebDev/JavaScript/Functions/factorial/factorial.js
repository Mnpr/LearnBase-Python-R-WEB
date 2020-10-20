function factorial(x){
var result = x;
for(i=x-1; i>0; i--){

if(x===0){
return 1;
}
result = result*i;
}
return result;
}

console.log(factorial(6));