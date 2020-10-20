var sum = [];
var input = prompt("Enter the elements of array and Type 'quit' when finished");

while(input !== "quit")
{
	sum.push(input);
	input = prompt("Enter the elements of array and Type 'quit' when finished");
}

function sumArray(x)
{
	var total = 0;
	x.forEach(function(element)
	{
		total = total+element;
	});

	return total;
	// for(i=0;i<x.length;i++)
	// {
	//	total = total + x[i];
	// }
}
sumArray(sum);


		
	