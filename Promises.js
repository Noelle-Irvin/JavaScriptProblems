//Promises in javascript

//Javascript is async.
// console.log("1");
// setTimeout(()=>{
// 	console.log('2');
// }, 0);
// console.log("3");
// for(let i = 0; i < 1000000; i ++){
// 	//looping...
// }
// console.log("Loop done");

//Example: We need the following to happen in order
//1. Initial request to get list of movie
//2. With that list of movies, comes all their id's Take the id's and get specific info
//3. With each movie data, we want to get the cast list
//BUT javascript won't return it to us in the order we want it. Unless...

//This is the way people used to handle this problem. This is ugly.
// $.getJSON(movieURL, (movieDate)=>{
// 	$.getJSON(specificMovieUrl, (thisMovie)=>{
// 		$.getJSON(specificMovieCastUrl, (castData)=>{
// 			//finally, we can do something with:
// 			//1.movieData
// 			//2.thisMovie
// 			//3.castData
// 		})
// 	})
// })
// $.prototype.getJSON = function(url, callback){
// 	//doing stuff...
// 	callback(dataIGot);
// }

//JS libraries to fake promises
//-Bluebird
//-Q

//What is a promise?
//-All a promise is, is a JS constructor (class) that gives you a few methods.
//-Hoepfully these methods make your code easier to read
//Methods:
//-then
//-all
//-race
//--resolve
//--reject
function go(){

return new Promise((resolve, reject)=>{
	//do some stuff...
	let something = true;
	if(something){
		resolve();
	}else{
		reject();
	}
})
}
const x = go();
//because x is a promise, it comes with a .then()
//then method will run whenever resolve function runs
const y = 2 + 2;

x.then(data)=>{
//once promise is done, perform this code
}
x.catch(data)=>{
//error
}

x.race()=>{
	//if you have an array of promises, whoever gets done first is the winner, and is used
}

// x.all() -- this will wait on an array of promises
