//When the onclick happens to the button, this function will run
function rollDice(){
	// console.log('The user just clicked the roll button!');
	let rand1 = Math.ceil(Math.random()*6);
	let rand2 = Math.ceil(Math.random()*6);

	//The dice images all follow this convention:
	//dN.gif where n is a number between 1 - 6
	//Use JS to update the DOM. Update the dice images, 
	//so that they use the image from our random numbers. 
	let dice = document.getElementById('dice');
	dice.children[0].src = `./dragon-assets/d${rand1}.gif`
	dice.children[1].src = `./dragon-assets/d${rand2}.gif`
	console.dir(dice);

	if(rand1 + rand2 > 8){
		document.getElementById('dragon').children[0].src = "http://www.pngmart.com/files/4/Sleeping-Beauty-PNG-Clipart.png";
		document.getElementById('dragon').children[0].style.height = "400px";
		document.getElementById('dragon').children[0].style.width = "400px";
		document.getElementById('message').innerHTML = "You have defeated the dragon!";

	}else if(rand1 + rand2 <= 8){
		document.getElementById('dragon').children[0].src = "https://i.ebayimg.com/images/g/0PIAAOSwFGNWTt5p/s-l300.jpg";
		document.getElementById('dragon').children[0].style.height = "400px";
		document.getElementById('dragon').children[0].style.width = "400px";
		document.getElementById('message').innerHTML = "You have been defeated.";
	}

}

//console.dir(window.document); //the Dom is a huge object
//When you are in the browser... EVERYTHING belongs to the window object
// There is NO exception to this, so you don't even need to include it
// window.alert('Hey, Donell!');

let dragon = document.getElementById('dragon');
console.log(dragon);
// dragon.innerHTML = '<h1>JavaScript was here!</h1>';