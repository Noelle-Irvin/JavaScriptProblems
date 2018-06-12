// in JavaScript, functions are first class objects.
// You can do almost anything to them that you can do to an object
// -Pass them around
// -Store them in variables
// -etc
const callback = function(){
	console.log("1000 milliseconds have passed!")
}
console.log(typeof(callback))
// console.log(callback())
setTimeout(callback, 1000);

// when you add () it will send the return value of the function instead of passing the whole function

function a(x){
	// console.log(x);
	return function(y){
		console.log(x+y);
	}
}
//Will this function work?
a(2)(3);
//It will work if function a returns a function




