
var reverse = [];
var input = prompt("Enter the elements of array and Type 'quit' when finished");

while(input !== "quit")
{
	reverse.push(input);
	input = prompt("Enter the elements of array and Type 'quit' when finished");
}

function printReverse(x)
{
	for(i=x.length-1; i>=0; i--)
	{
		console.log(x[i]);
	}

}

printReverse(reverse);
