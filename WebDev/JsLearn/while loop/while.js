//TO print the numbers between -10 and 19 

var ten = -10;
console.log("numbers between -10 and 19");

while(ten < 20){
console.log(ten);
ten++;
} 

//To print the even numbers between 10 and 40

var num = 10;
console.log("even numbers between 10 and 40");

while(num<=40)
{
if(num%2=== 0)

{
  console.log(num);

}
num++;
}



// TO print the odd numbers between 300 and 333

var odd = 300;
console.log("odd Numbers between 300 and 333");

while(odd<334){
if(odd%2===0){
console.log(odd+1);

}
odd++;
}



//Numbers divisible by 5 and 3 between 5 and 50

var div = 5;
console.log("Num. divisible by 5 and 3 between 5 and 50 ");

while(div<51){

if(div%5===0 && div%3==0){
console.log(div);
}
div++;
}