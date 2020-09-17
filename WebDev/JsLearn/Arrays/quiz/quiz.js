var zahlen =[1,2,3,4,5,6,7,8,9,10];
var farben = ["rot","gelb","orange","weiß",
		"schwarz","grau","blau","lila",
		"grün","rosa","das gold","das silver"];

function printfarbe(farbe){

console.log(farbe);
}

for(var i=0; i<zahlen.length; i++){

if(i%3===0){
	printfarbe(i);
		}
}



