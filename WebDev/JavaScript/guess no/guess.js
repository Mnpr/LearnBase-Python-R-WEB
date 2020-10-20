var secretNum = 4;
var userNum = Number(prompt("Guess any number "));

if (userNum===secretNum)
{
	alert("You got it right");
} 

else if(userNum < secretNum)
{
	alert("too low");
}

else 
{
	alert("too high");
}
