var todo = [];

var input = prompt("what would you like to do ? ");

while(input !== "quit")
{

	if(input==="new")
	{
		var newtodo = prompt("New To-Do");
		todo.push(newtodo);
	}
	else if(input==="list")
	{
		console.log(todo);
	}

	input = prompt("what would you like to do ? ");

}
console.log("you quit the app");