//Moon Problem

//First full moon of 2000 was Jan 21, 00:40:24
//lunar cycle is every 29 days, 12 hours, 44 minutes

const firstFullMoonOf2000 = new Date("Friday, 21 January 2000, 00:40:24");
console.log(firstFullMoonOf2000);
//getTime is a method available to date objects
const firstFullMoonOf2000InSeconds = firstFullMoonOf2000.getTime()/1000;
console.log(firstFullMoonOf2000InSeconds);

const daysAsSeconds = 24 * 60 * 60 * 29;
const hoursAsSeconds = 12 * 60 * 60;
const minutesAsSeconds = 60 * 44;

const secondsInALunarMonth = daysAsSeconds + hoursAsSeconds + minutesAsSeconds;
console.log(secondsInALunarMonth);

const tsOfEnd = new Date("31 December 2999, 23:59:59").getTime()/1000;
console.log(tsOfEnd);

let currentMoonTS = firstFullMoonOf2000InSeconds;
let fullMoonArray = [];
while(currentMoonTS < tsOfEnd){
	fullMoonArray.push(new Date(currentMoonTS*1000).getMonth());
	currentMoonTS += secondsInALunarMonth;
}

console.log(fullMoonArray);
let blueMoonCounter = 0;

for(let i = 0; i < fullMoonArray.length; i++){
	if(fullMoonArray[i] == fullMoonArray[i+1]){
		blueMoonCounter += 1;
	}
}

console.log(blueMoonCounter);
