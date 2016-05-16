$(document).ready(function(){
	var game;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
		/** start game and retain state*/
		game = newGame();
		game.setRandomNumber();
		/** create new game object and generate new random number */
		$('.new').click(function() {
			$('#feedback').html('Make Your Guess!');
			game = newGame();
			game.setRandomNumber();
		});
		$('form').submit(function(e) {
			var guess = $('#userGuess').val();
			game.setGuessCount();
			$('#count').html(game.getGuessCount());


			e.preventDefault();
		});
});
/**
* function to start a new game
*/
function newGame() {
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
newGame.prototype.hotOrCold = function(randomNumber, guess) {
	var diff = Math.abs(randomNumber - guess);
	switch (diff) {
		case 50 <= diff:
			return "Ice Cold";
		case 30 <= diff < 50:
			return "Cold";
		case 20 <= diff < 50:
			return 'Warm';
		case 10 <= diff < 20:
			return 'Hot';
		case 1 <= diff < 10:
			return "Very Hot";
		case 0 === diff:
			return "Congradulations";
	}
};
