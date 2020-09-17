var todo = [];
var input = prompt("what would you like to do ?");
while(input !== "quit")
{
	if(input==="new")
	{
		newList();	
	}
	else if(input==="list")
	{
		listTodo();		
	}
	else if(input==="delete")
	{
		deleteTodo();
	}
	else
	{
		errorInputs();
	}
	input = prompt("what would you like to do ? ");	
}
console.log("you quit the app");

function newList()
{
	var newtodo = prompt("New To-Do");
	todo.push(newtodo);
	console.log("New item added to list");
}

function listTodo()
{
	console.log("*************^*************");
	todo.forEach(function(i, j)
	{
		console.log(j+ " : " + i);
	});
	console.log("*************-*************");
}

function deleteTodo()
{
	// ask for the index
	var del = prompt("please specify the todo you want to remove by index");	
	todo.splice(del,1);
	// delete the element
	console.log("The item has been deleted");
}

function errorInputs()
{
var enter = prompt("invalid input try 'help'");
	if(enter ==="help")
	{
		console.log("Type 'new' to add new To-Do");
		console.log("Type 'list' to list the todos");
		console.log("Type 'delete' to remove specific To-Do");
		console.log("Type 'quit' to exit app");
	}
	else
	{
		console.log("invalid input try 'help'");	
	}
}