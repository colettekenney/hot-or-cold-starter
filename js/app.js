
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


//----------- INPUT VALIDATION SECTION -----------//
//------------------------------------------------//
  	
	$('#guessButton').click(function() {
		var userGuess = +(document.getElementById("userGuess").value);
	 		
		if(userGuess < 1 || userGuess > 100) {
			alert("Please Enter a Number Between 1 and 100");
	  	}	
	  	else {
	  		secretNumber();
	  	}
	});
//------------------------------------------------// 


//---- THIS IS THE SECRET NUMBER FUNCTION --------//
//------------------------------------------------//
  	function secretNumber() {
  		var secretNumber = Math.floor(Math.random()*100)+1;
  		return secretNumber;
  		checkDifference(userGuess, secretNumber);
  	}
//------------------------------------------------//  


//---- THIS IS THE CHECK-DIFFERENCE FUNCTION -----//
//---- THIS IS THE MAIN OPERATION OF THE GAME ----//
//------------------------------------------------//
  	function checkDifference (userGuess, secretNumber) {
		if (userGuess > secretNumber) {
			var difference = userGuess - secretNumber;
			return difference;
			feedback(difference);
			countAppend();

		}
		else if (userGuess < secretNumber) {
			var difference = secretNumber - userGuess;
			return difference;
			feedback(difference);
			countAppend();
		}

		else {
			document.getElementById("feedback").innerHTML("You Won! Click New Game to Play Again.")
			countAppend();
		}
	}
//------------------------------------------------//



//---- THIS IS THE FEEDBACK FUNCTION -------------//
//------------------------------------------------//
	function feedback(difference) {
		if (difference >= 50) {
			document.getElementById("feedback").innerHTML = "Ice Ice Cold";
		}
		else if (difference >= 30 && difference <= 49) {
			document.getElementById("feedback").innerHTML = "Ice Cold";
		}
		else if (difference >= 20 && difference <= 29) {
			document.getElementById("feedback").innerHTML = "Cold";
		}
		else if (difference >= 10 && difference <= 19) {
			document.getElementById("feedback").innerHTML = "Warm";
		}
		else if (difference >= 5 && difference <= 9) {
			document.getElementById("feedback").innerHTML = "Hot";
		}
		else  {
			document.getElementById("feedback").innerHTML = "Very Very Hot";
		}
	}
//------------------------------------------------//



//---- THIS IS THE COUNT-APPEND FUNCTION ---------//
//------------------------------------------------//
	function countAppend() {
		if (userGuess != secretNumber) {
			var count = 1;
			count ++;
			$('ul#guessList').append('<li>' + $('#userGuess').val() + '</li>');
		}
		else {
			var count = 1;
			$('ul#guessList').append('<li>' + $('#userGuess').val() + '</li>');
		}
	}
//------------------------------------------------//



