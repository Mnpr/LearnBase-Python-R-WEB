console.log("To print the numbers between -10 and 19");

for(var i=-10; i<20; i++){

console.log(i);
}

console.log("To print the even numbers between 10 and 40");

for(var i=10; i<=40; i+=1)
  {
	if(i%2===0){
	console.log(i);
  	}
   }

console.log("To print the odd numbers between 300 and 333");

for(i=300; i<=333; i++){
	if(i%2===0){
	console.log(i+1);
	}
}


console.log("To print the numbers divisible by 5 and 3 between 5 and 50");

for(i=5; i<=50; i++){
	if(i%5==0 && i%3==0){

	console.log(i);
	}
}