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
			game = newGame();
			game.setRandomNumber();
		});
		$('#guessButton').submit(function() {

		});
});
/**
* function to start a new game
*/
function newGame() {
	var randomNumber = 0;
	var gameState = {};
	/**
	* function to generate random number from 1 to 100
	* return random number
	*/
	gameState.setRandomNumber = function() {
		randomNumber = Math.floor((Math.random() * 100) + 1);
	};
	return gameState;
}
