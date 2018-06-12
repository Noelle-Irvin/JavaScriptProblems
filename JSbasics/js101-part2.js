const = `SELECT * FROM users WHERE name = "${name}"`

const multiLine = `
<div>
	<p></p>
</div>
`
//Always try to use the back tick bc it can do everyting the double and single can but more

const myContacts = new Map();

let arr = [1,2,3,4,5];
let arr2 = arr //this won't make a new array, arr2 will just point to arr
let arr3 = arr.slice(); //this will make a new array and will copy arr to arr3
//slice is also good for copying an array
//array.map will return every single thing.
//array.filter will return only the thing that passes the function
//splice mutates the array unlike slice. splice will allow you to insert stuff and delete stuff
//unshift adds something to the beginning of the array
//google Linked List and shift***

.find(), .findIndex()
these are prototype of Array 

const cities = require(`./cityData.js`); //this is grabbing data from another file in the folder
console.log(cities); //module.exports = cities; <- this line is at the bottom of the file
cities.list.find(function(){
	//this returns the object located at the index that passes function
})
cities.list.findIndex(function(){
	//this returns the index of the object tht passes function
})

//can stop a loop by typing break; in a for loop
//break is used to terminate the loop early
//continue; will terminte the current iteration early and will go on to the next one.
		// unlike break, continue will continue the loop where break will end the whole loop
//Ternary Operators -> (if variable is true ? then do this : if not, do this)
//for each loop -> 
mrArray.forEach(function(elem){
	console.log(elem);
})
//Map is similar to for each
const newArr = myArray.map(function(elem){
	//return something inside the map method and whatever you return will pushed onto the newArr
	return elem+1;
})
console.log(newArr);
//you can make new prototypes with
Array.prototype.newfunction = function(){}

// for ... of <- this is another type of loop
let arr3 = {`Jonathan`, `Newsha`, `Dina`, `Aleya`};
for(value of arr3){ // this will return the value
	console.log(value)
}
for(key in arr3){ //this will return the key
	console.log(key) 
}

const nameOfCoolGirl = `Joss`;
for(let i = 0; i<nameOfCoolGirl.length; i++){
	console.log(nameOfCoolGirl[i]); // returns J o s s
}

const strAsArray = nameOfCoolGirl.split('')
console.lg(strAsArray) //return ['J', 'o','s','s']

const str = `The day is good, but long, at Syntel`
const strAsArray2 = str.split(',') //returns ['The day is good', ' but long', ' at Syntel']
//split takes a string and splits it into an array
//join takes an array and joins it into a string
strAsArray[0] = strAsArray[3];
strAsArray.pop()
console.log(strAsArray);
const strAgain = strAsArray.join(``);  
console.log(strAgain) //returns sos

//FUNCTION
function sum_numbers(a,b){
	return a+b;
}
console.log(sum_numbers(1,4)); // this will return 5
//if you only put in 1 number then it will return NaN
//if you provide too many args, the extra args will be ignored
		//ec: (1,4,5) will still return 5
//default parameters
function sum_numbers2(a, b=4){
	return a+b;
}
console.log(sum_numbers(1) //returns 5 because b is set to default
//you have the option of setting defaults, in the event not enouch args are passed through

//Callbacks - can pass a function around for somebody else to run later
function subtract(a,b){
	return a - b;
}
function run(callback, num1, num2){ //callback isn't a key word, it can be named anything
	const x = callback(num1, num2); //can replace callback in this method with the waterBottle
	return x;
}
console.log(run(subtract, 2, 5)); //a function in JS is just another object

//OBJECTS
//empty array
const arr = [];
console.log(typeof(arr)); //returns object

//create an empty object
const obj = {}; //no encapsulation, can add any property at any time

const func = function(){
	console.log("test")
}
console.log(typeof(func)); //returns function

//Objects are a combination of properties (keys) and values
//Sort of key:value pair
//Syntx is:
const objSyntax ={
	property: "value12"
}
objSyntax.property //value12
objSyntax.table2 = ['Toby', 'Noelle'];
console.log(objSyntax); //returns {property: 'value12', table2:['Toby','Noelle']}
console.log(objSyntax.Carl) //returns undefined

const student = {
	name: `Amos`, 
	profession: `Developer`,
	languages: [
		`Java`
		`JavaScript`
	],
	sayHello: function(){
		console.log("Habari");
	}
	//can't start a property name with a number, some key words, an array or an object
}
student.sayHello(); //returns Habari
console.log(student.sayHello) //returns [function:sayHello]

console.log(student[`name`])
//is the same as this:
console.log(student.name)
//is the same as this:
const propToGet = `name`
console.log(student[propToGet]) //returns

let studentArray = [student];
const student2 = {
	name: `Hunter`
	profession: `ninja`
}

studentArray.push(student2);