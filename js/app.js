$(document).ready(function(){
	var currentGame;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
		/** start game */
		currentGame = newGame();
		/** create new game object and generate new random number */
		$('.new').click(function() {
			currentGame = newGame();
		});
		$('form').submit(function(e) {
			var guess = $('#userGuess').val();
			testUserInput(guess);
			e.preventDefault();
		});
});
/**
* This takes the guess from the user and adds it so they can see previous guesses
*/
function guessList(guess) {
	$('#guessList').append('<li>' + guess + '</li>');
}
/**
*	tests the user input is between 1 and 100, and then calls setguess count
* to tell the user if they are hot or cold, and then sets the count number
*/
function testUserInput(guess) {
	if (guess <= 100 && guess >= 1) {
		currentGame.setGuessCount();
		$('#count').html(currentGame.getGuessCount());
		$('#feedback').html(hotOrCold(currentGame.getRandomNumber(), guess));
		guessList(guess);
	}
}
/**
* Sets the initial game state
*/
function newGame() {
	$('#userGuess').val('');
	$('#feedback').html('Make your Guess!');
	$('#count').html('0');
	currentGame = new game();
	currentGame.setRandomNumber();
	return currentGame;
}
/**
* function to start a new game
*/
function game() {
	var randomNumber = 0;
	var guessCount = 0;
	var gameState = {};
	/**
	* function to generate random number from 1 to 100
	* return random number
	*/
	gameState.setRandomNumber = function() {
		randomNumber = Math.floor((Math.random() * 100) + 1);
	};
	/**
	* function to retrive the random number
	* return int
	*/
	gameState.getRandomNumber = function() {
		return randomNumber;
	};
	/**
	* function to increment count
	*/
	gameState.setGuessCount = function() {
		guessCount++;
	};
	/**
	* function to retrieve count
	* return int
	*/
	gameState.getGuessCount = function() {
		return guessCount;
	};
	return gameState;
	}
	/**
	* function to determine how close the users guess is to the random number
	* return string
	*/
	function hotOrCold (randomNumber, guess) {
			var diff = Math.abs(randomNumber - guess);
			if (50 <= diff)
				return "Ice Cold";
			else if (30 <= diff && diff < 50)
				return "Cold";
			else if (20 <= diff && diff < 50)
				return 'Warm';
			else if	(10 <= diff && diff < 20)
				return 'Hot';
			else if (1 <= diff && diff < 10)
				return "Very Hot";
			else
					return "congratulations";
		}
