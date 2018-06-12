let player1Array = [];
let player2Array = [];
let gameOver = false;
const winningCombos = [
	['one', 'two', 'three'],
	['four', 'five', 'six'],
	['seven', 'eight', 'nine'],
	['one', 'four', 'seven'],
	['two', 'five', 'eight'],
	['three', 'six', 'nine'],
	['one', 'five', 'nine'],
	['seven', 'five', 'three']
	];

function showInstructions(){
	let star = document.getElementById('star');
	star.style.display = "none";
	document.getElementById('message').innerHTML = "First let's choose our players...";
	setTimeout(displayPlayers, 1000);
}

function displayPlayers(){
	document.getElementById('players').style.display = "block";
	document.getElementById('message').innerHTML = "Player 1, select your star color!";
}

function playerSelection(color, img){
	if(player1Color == ""){
		player1Color = color;
		document.getElementById('gameBoard').children[0].children[2].children[0].src = img;
		console.log("Player 1 color = " + player1Color);
				document.getElementById('message').innerHTML = "Now it's your turn, Player 2!";

	// }else if(player1Color !== "" && player2Color == ""){
	// 	alert("Player 1 selected that star. Please choose another option.");
	}else if(player1Color != ""){
		player2Color = color;
		document.getElementById('gameBoard').children[2].children[2].children[0].src = img;
		console.log("Player 2 color = " + player2Color);
	}
	
	if(player1Color != "" && player2Color != ""){
		document.getElementById('message').innerHTML = "Let's Play!";
		setTimeout(playGame, 2000);
	}
}

function playGame(){
	document.getElementById('players').style.display = "none";
	document.getElementById('message').innerHTML = "Player 1, you go first... Select a square.";
	document.getElementById('gameBoard').style.display = "block";
	turn = "Player 1"
}

function move(classStuff){
	if(!gameOver){
	if(document.getElementById(classStuff).style.background != ""){
		alert("That square has already been selected. Please select another.");
	
	}else if(turn == "Player 1"){
		document.getElementById(classStuff).style.background = player1Color;
		document.getElementById(classStuff).innerHTML = "X";
		document.getElementById('message').innerHTML = "Player 2's turn...";
		player1Array.push(classStuff);
		console.log(player1Array);
		checkWinner(turn, player1Array);
		turn = "Player 2";
	}else if(turn == "Player 2"){
		document.getElementById(classStuff).style.background = player2Color;
		document.getElementById(classStuff).innerHTML = "O";
		document.getElementById('message').innerHTML = "Player 1's turn...";
		player2Array.push(classStuff);
		console.log(player2Array);
		checkWinner(turn, player2Array);
		turn = "Player 1"
	}
}
}

function checkWinner(whosTurn, playersArray){
	
	for(let i = 0; i < winningCombos.length; i++){
		let squareCount = 0;
		for(let j = 0; j < winningCombos[i].length; j++){
			let currentSquare = winningCombos[i][j];
			if(playersArray.indexOf(currentSquare)>-1){
				squareCount++;
			}
			if(squareCount === 3){
				document.getElementById('message').innerHTML = `${whosTurn} + " has won the game!"`;
				document.getElementById(turn).innerHTML += "|"; 
				gameOver = true;
			}
		}
	}
	

	}


// console.dir(gameBoard);
var player1Color = "";
var player2Color = "";
var turn = "";
var winner = "";




