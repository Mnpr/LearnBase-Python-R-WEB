var uniform = [];
var input = prompt("Enter the elements of array and Type 'quit' when finished");

while(input !== "quit")
{
	uniform.push(input);
	input = prompt("Enter the elements of array and Type 'quit' when finished");
}

function isUniform(x)
{
	var first = x[0];


	

	for(i=1; i<x.length; i++)
	// i= 1 because i=0 would cause 0=0 which will get out 
	//of loop and return true without comparing other item of array
	{
		if(first !== x[i])
		{
			return false;
		}
	}


	// if we used forEach here there would be one problem

	//x.forEach(function(element){
	//	if(element!==first){
	//		return false;
	//	}
	//});
	//even if the items are not equal and it returns false the result
	//will only be get out of anonymous function and still return true
			return true;
}

isUniform(uniform);

		
	