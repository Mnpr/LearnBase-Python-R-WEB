// var max = [];
// var input = prompt("Enter the elements of array and Type 'quit' when finished");

// // while(input !== "quit")
// // {
// // 	max.push(input);
// // 	input = prompt("Enter the elements of array and Type 'quit' when finished");
// // }

function maxArray(x)
{
	var first = x[0]
	// x.forEach(function(element)
	// {
	//   if(first<x[i])
	// {
	// 	first = x[i];
	// }

	// });
	for(i=1;i<x.length; i++)
	{

		if (first<x[i]) 
		{
			first = x[i];
		}
		
	}
	return first;
}

