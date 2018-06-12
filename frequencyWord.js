let str =  "the day is sunny the the the sunny is is"

console.log(frequencyWord(str))


function frequencyWord(str){
	let array = str.split(" ");
	let frequencyWord = {}

	for(i = 0; i < array.length; i++){
		if(frequencyWord[array[i]] == undefined){
			frequencyWord[array[i]] = 1;
		}else{
			frequencyWord[array[i]] = frequencyWord[array[i]] + 1;
		}
	}

	return frequencyWord;
}