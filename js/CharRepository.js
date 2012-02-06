// requires jstorage.js

function Character (name){
	this.name = name;
}

var loadAllChars = function (){
	var chars = [];
	chars.push(new Character("Waldeamr"));
	chars.push(new Character("Dimi"));
	return chars;
}