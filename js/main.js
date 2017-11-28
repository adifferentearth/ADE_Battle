function Person(name, age, weight, personality){
	this.name = name;
	this.age = age; 
	this.weight = weight;
	this.personality = personality;
};

var melissa = new Person("Melissa", 15, 200, "shy");
var aaron = new Person("Aaron", 30, 190, "strong");

function gym(person){
	return person.weight -= 20;
};

function confidence(attitude){
	return attitude.personality = "Confident!";
};

function horny(attitude){
	return attitude.personality = "Horny!";
};

function afraid(attitude){
	return attitude.personality = "Scared!";
};