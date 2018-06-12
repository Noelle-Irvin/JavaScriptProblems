let string = "today is friday";

let capitalizedLastLetter = capitalizeLastLetter(string);

console.log(capitalizedLastLetter);

function capitalizeLastLetter (string){
	let arrayOfString = string.split(" ");
	let capitalizedArray = arrayOfString.map((word) =>{
		let arrayOfWord = word.split("");
		let temp = arrayOfWord[arrayOfWord.length-1].toUpperCase();
		arrayOfWord.splice(arrayOfWord.length-1, 1, temp).join('');
		let joinedArray = arrayOfWord.join('')
		return joinedArray;
	})
	return capitalizedArray.join(' ');
}


