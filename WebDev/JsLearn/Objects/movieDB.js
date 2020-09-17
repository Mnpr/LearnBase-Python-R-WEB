var movieDB = [
		{ 
		title:"Harry porter",
		rating:5,
		watched : true
		},
		{ 
		title:"jon wick",
		rating:3.5,
		watched : false
		},
		{ 
		title:"undisputed",
		rating:4,
		watched : true
		},
              ];
function movieDb(x)
	{
		for(i=0;i<x.length;i++)
			{
			  if(x[i].watched == true)
				{
					console.log("You have watched the movie " + x[i].title + " Rating : " + x[i].rating);
				}
			 else

				{
					console.log("You have not watched the movie " + x[i].title + " Rating : " + x[i].rating);
				}
			}
	}
