//JS, since ES1, up through ES5, used constructor functions to make objects
//There was no class keyword.
//All a constructor is, is a function that takes arguments and it has it's own context..."this"
//The function should be proper case, as a convenetion.

function Player(name, heroClass, weapon){
	// inside the function, is where you declare your instance variables
	this.name = name;
	this.class = heroClass;
	this.weapon = weapon;
	// this.species = `Human`; //this is also redudant, can be replaced with prototype
	// this.takeDamage =function(damagePoints){  //this method is redudant since it is the same for
	// 	console.log(`${this.name} has taken ${damagePoints} damage!`); // all players
	// }
}

Player.prototype.takeDamage = function(damagePoints){
	console.log(`${this.name} has taken ${damagePoints} damage!`);
}

	Player.prototype.species = `human`;

let player1 = new Player(`Dario`, `ultimateWarrior`, `sword`);
console.log(player1);
console.log(player1.name)
player1.numOfKills = 1000;
console.log(player1) //this will show that numOfKills property has been added to player1
let player2 = new Player(`Hunter`, `Hunter`, `Bow`);
console.log(player2) //player 2 will not have numOfKills 

player1.takeDamage(2);
player2.takeDamage(12);

//CLASS
//the new way of doing things
//a class is NOT a function
class Player{  //this is not an actual class, this is just syntactical sugar
	constructor(name, heroClass,weapon,speed){
		this.name = name;
		this.heroClass = heroClass;
		this.weapon = weapon;
		this.speed = speed;
	}
	takeDamage(damagePoints){
		console.log(`${this.name} has taken ${damagePoints} damage!`)
	}
}

class Car{
	constructor(make, model, mpg, topSpeed){
		this.make = make;
		this.model = model;
		this.mpg = mpg;
		this.topSpeed = topSpeed;
	}
	start(){
		console.log("Vroom vroom");
	}
}

class ElectricCar extends Car{
	constructor(make, model, maxDistance. topSpeed){
		//BEFORE anything else happens in a subclass constructor, we have to call the parent
		// constructor via super
		super(make, model, null, topSpeed);
		this.maxDistance = maxDistance;
	}
	//override method
	start(){
		//this is an electric car... they don't make noise
		console.log(`... ... ...`);
	}
}
//can't overload in JS. There is no method overloading.
 const tobysCar = new ElectricCar(`Tesla`, `Model S`, `200 miles`, `100mph`);
 console.log(tobysCar)
 tobysCar.start(); //method is overridden

 //SETTERS AND GETTERS
 class Employee{
 	constructor(name, eid, salary, title){
 		this._name = name;  // add a _ to let the system know that this isn't meant to be 
 		this.eid = eid;     //accessed by anybody. it essential makes it a 'private' variable
 		this.salary = salary;
 		this.title = title;
 	}
 	get name(){
 		console.log(`Getting name...`);
 		return this._name;
 	}
 	set name(newName){		//this causes an infinite loop bc everytime name is set i.e. the 
 		console.log(`Setting name...`); //constructor, it calls set name
 		this._name = newName;
 	}
 }
 const employee1 = new Employee(`Ross`, 192, `190,000`,`Big Shot`);
 console.log(employee1);

 //STATIC METHODS
 class doMath{
 	static add(x,y){
 		return x+y;
 	}
 	static subtract(x,y){
 		return x-y;
 	}
 	static double(x){
 		return x*x;
 	}
 }
 // const x = new doMath(); // with the static key word, you don't need to create an object 
 doMath.add(1,2);  //to use the add method directly

 //the static method does not belong to the object but belongs to the class doMath

 module.exports = doMath; //this exports the class to another file if called upon
 //to call the method in the other file use:
 const doMath = required(`./filename`);
 console.log(doMath.add(2,3))

 //MAPS
 Set<String> keys = myContacts.keySet(); // this happens in JAVA
 //JavaScript
 //Map in ES6 was made for Java Programmers.
 //It's just a key-value pair. It is FAR more protected than a regular object.
 //It is an iterable.

 const myContactsObj = {
 	"Rob": "555-555-5555",
 	"Bill": "555-444-3333"
 }
 for(value in myContactsObj){
 	console.log(key);
 }

 let myContacts = new Map();
 console.log(myContacts) //empty
 //get and set methods //only way to access a variable in hashmap is through get
 myContacts.set(`Rob`, `555-1234`);  //this makes it somewhat protected
 myContacts.set(`Jim`, `555-7654`);
 console.log(myContacts);
 const rob = myContacts.get(`Rob`); //this gets the value for Rob and set it equal to rob
 console.log(rob);

 // CRAZY...
 let aFunc = function(){
 	console.log(`Hahaha, I'm a function and I break object keys.`)
 }
 aFunc() //you can use a function as a key value
 myContacts.set(aFunc,`you can't break me`); //this will not break
 //all maps has a size method with .size
 //clear method ex. myContacts.clear, also .entries and forEach available
 //a set is the same thing as an array except you can't repeat values