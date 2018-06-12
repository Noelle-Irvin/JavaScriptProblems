// setTimeout(()=>{}) same as (function(){})
//function will preserve context(use this) but not rocket 

//Javascript will always run the next line that can be run
// right now. JS has only one thread which means it only has
// one brain
//Which one comes first?
setTimeout(()=>{
	console.log("I am first")
},0);
console.log("I am second")
setTimeout(()=>{
	console.log("I am third")
}, 100);
for(let i = 0; i < 1000001; i++){
	if(i===1000000){
		console.log("I am fourth");
	}
}