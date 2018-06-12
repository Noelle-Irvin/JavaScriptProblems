const players = require('./basketballfile.js');
// console.log(players);
// * Print the average playing time of the players.
let sumOfPlayerTime = 0;

// players.forEach(function(element){
// 	sumOfPlayerTime += element.avgMinutesPlayed;
// })
// let avgPlayingTime = sumOfPlayerTime/players.length;
// console.log(avgPlayingTime);

// * Print the average playing time of the starters.
// let countOfStarters = 0;
// players.forEach(function(element){
// 	if(element.starter == true){
// 		sumOfPlayerTime += element.avgMinutesPlayed;
// 		countOfStarters += 1;
// 	}
// })
// let avgPlayingTime = sumOfPlayerTime/countOfStarters;
// console.log(avgPlayingTime);


// * Print the average playing time of the bench players.
// let countOfBenchers = 0;
// players.forEach(function(element){
// 	if(element.starter == false){
// 		sumOfPlayerTime += element.avgMinutesPlayed;
// 		countOfBenchers += 1;
// 	}
// })
// let avgPlayingTime = sumOfPlayerTime/countOfBenchers;
// console.log(avgPlayingTime);

// * Create an array of the names of each player.
// let arrOfNames = [];
// players.forEach(function(element){
// 		arrOfNames.push(element.name);
// })
// console.log(arrOfNames);

// * Create an array of the names of the players who average more than 10 points per game.
// let arrOfNames = [];
// players.forEach(function(element){
// 	if(element.avgPoints > 10){
// 		arrOfNames.push(element.name);
// 	}
// })
// console.log(arrOfNames);

// * Create an array of the names of the players who average more than 5 rebounds per game.
// let arrOfNames = [];
// players.forEach(function(element){
// 	if(element.avgRebounds > 5){
// 		arrOfNames.push(element.name);
// 	}
// })
// console.log(arrOfNames);

// * Who is the player with the most points per minute played? Write a program to find that out.
// let bestPlayer;
// let bestPlayerPointsPerMinute = 0;
// players.forEach(function(element){
// 	let pointsPerMinute = element.avgPoints/element.avgMinutesPlayed;
// 	if(pointsPerMinute > bestPlayerPointsPerMinute){
// 		bestPlayerPointsPerMinute = pointsPerMinute;
// 		bestPlayer = element.name;
// 	}
// })
// console.log(bestPlayer);

// * Based on this data, what is the average points score for the team as a whole? //60 minutes
let score = 0;
players.forEach(function(element){
	let timeInGame = element.avgMinutesPlayed/60;
	let points = element.avgPoints * timeInGame;
	score += points;
})
console.log(score);