// // printing stuff...
// // console.log("Hello, World");
// // alert("Hello, World!"); This will only run in the browser
// // document.write("Hello, World...") This is another way to print stuff in the browser

// // VARIABLES
// // SAME as in every other language. A var is a place to stash something (number, string, an array,
// // 	object, boolean, etc.). that you could write yourself every time but a var is faster

// // Data-Types available:
// // 1. String (not a real data-type in java)
// // 2. number
// // 2a. float, double
// // 2b. int

// // console.log(.2 + .1);
// // 3. Boolean - true, false
// // 4. array
// // 5. Object 
// // 6. Symbol

// // JS variables are made dynamically like Python, Ruby, Php. That means you don't 
// // have to declare the type. It's the interpretors problem to figure out what it's suppposed to be
// // 3 ways to declare a variable in JS.
// // var x = 3; //- declared that x exists
// // // console.log(x);

// // var y;
// // y=3;

// // i = 3;

// // let will make the variable a block level variable which means the variable will go away if it
// //  is in a function unlike var
// // for(var i = 0; i < 10; i++){
// // 	console.log(i);
// // }

// // var is not a block level variable. var will last until the entire program ends
// //everything by default is a global variable

// //console.log("value of i after the loop", i);

// // for(let i = 0; i < 10; i++){
// // 	console.log(i);
// // }
// // console.log("value of i after the loop", i);

// // const is the third way you can make a variable
// // const y = 3;
// // y=4;
// // This will give an error. You can't assgin a constant variable

// // const myArr =[];
// // myArr.push(3);
// // console.log(myArr);

// // when using const, all it means is you can't use the equal sign again but you can change it 
// // in some other way such as pushing to arrays

// // JavaScript uses camelCase
// let name="Robert Bunch";
// name ='Robert Bunch';
// name = "Robert \"A Crazy Guy\" Bunch";
// let age; //this will last for as long as the brackets are
// // var age;
// //const
// let firstName = "Dario";
// let lastName = "Seays";
// let fullName = firstName + " " + lastName;
// // console.log(fullName);

// const awesomeGuy = `${firstName} ${lastName}`; //template literal
// // console.log(awesomeGuy);

// const theMeaningOfLife = `The meaning of life is ${40+2}`;
// // console.log(theMeaningOfLife);

// // NUMBERS
// // no FLOAT. no DOUBLE... just number
// const theYear =2018;
// const shortPi=3.14;
// // console.log(typeof(shortPi));

// // Math is just like everyone else
// const twoYearsAgo = theYear -2;
// // console.log(twoYearsAgo); 

// // +, -, /, *, % these are the main operators

// const whatThe = fullName + 3 //if you use a + between diff datatypes, string will always win
// //if you cast a string with a diff data type, string always wins
// // console.log(whatThe);

// // Booleans
// // 1 or 0, off or on, true or false, yes or no
// const theTruth = true;
// const theLie = false;
// // console.log(typeof(theLie));

// // Incramenting...
// let num = 1;
// //postfixing - operation is done after the fact
// num++; //adds 1
// num--; //subtracts 1
// //prefixing - operation is done before the fact
// ++num;
// --num;

// // Order of operations for math... same as what you learned in third grade
// // * and / and % ALWAYS come before + and -
// // except for () overrides all

// // conditionals
// const classSize = 32;
// if(classSize > 20){
// 	// console.log("Wow");
// }
// // could also do >=
// const a = 3;
// const b = `3`;
// // == will compare the value without respect to datatype
// // === will compare the value AND datatype. Safe and probably reasonable way to compare stuff 
// // if(a==b){console.log("Equal")} This would be true but === would not be true.

// // TO chech is NOT true...
// // if(a!==b){console.log("A and b are not Equal")};

// //The Math object
// let n = 12.2;
// let roundedN = Math.round(n);
// // console.log(roundedN);
// let cielN = Math.ceil(n);
// // console.log(cielN);
// //Math.floor rounds to the lower number... takes off the decimal
// //parseInt will also hack off the decimal. ex: 0.999 -> parseInt -> 0
// let rand = Math.random();
// // console.log(rand);
// let betweenOneAndTen = Math.ceil(rand*10);
// // console.log(betweenOneAndTen);

// ARRAYS
let students = [];
// set a var to an array with elements in it
students = [`Shane`, `Calder`, `Amber`]; //[] are for arrays, {} are for objects
// array.push will add a new element onto the end of the array
students.push(`Donell`);
// console.log(students);
// All arrays have a length property. It is always accessible. 
// console.log(students.length);
//Just like Java and everyone else, the first index is zero.

//Strings are just fancy arrays
const finallyAGirl = 'Tawni';
// console.log(finallyAGirl.length);

// Any type of datatype in any index in an array
// 1. string 2. array 3. object 4. Booleans 5. number
const chaoticArray = [`Mariano`, 436, [`orange juice`, `JayZ`, 3]];
// console.log(chaoticArray);
// console.log(chaoticArray[2][0]);

let atlTeams = [
	'Braves',
	'Falcons',
	'Hawks',
	'Thrashers'
];
atlTeams.pop(); //remove the final element
atlTeams.push('Atl United');
// .shift() will remove and RETURN the first element in the array
// console.log(atlTeams.shift());
// console.log(atlTeams);

// copyOfRange = java for get part of an array

let nfcTeams = [
	'Falcons',
	'Panthers',
	'Saints',
	'Bucs'
];
// slice copy from the array...takes 2 args: 1. index to start at and 2.index to stop at
// SLICE DOES NOT MUTATE THE ARRAY
const l = nfcTeams.slice(1,3); //start copying when you get to the first index and stop 
								// copying when you get to the third so it will not copy third
								//NOT INCLUSIVE
// console.log(l);
//all arrays have a map method
//map will loop through the array and return each time through, a new element for the new array
const randomNumbers = [1,2,3,4,5,6];
const evenNumberArray = randomNumbers.filter(function(number){
	if(number % 2 ==0){
		return number;
	}
});
console.log(evenNumberArray);

// Splice is a prototype of all arrays... if you are an array you have splice
//splice will allow you to add and remove from any index
//splice takes 3 args:
//1. Where to start(just like slice)
//2. How many to delete (can be 0)
//3. WHat to inset, if anything (can be left out)
randomNumbers.splice(1,2, 'Noelle');
// console.log(randomNumbers);