
$(document).ready(function(){
	var secretNumber = Math.floor(Math.random()*100)+1;
	var count = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//------------GLOBAL VARIABLES SECTION------------//
//------------------------------------------------//
//	var secretNumber = secretNumber();
//	var difference = checkDifference();

//------------------------------------------------//


//----------- INPUT VALIDATION SECTION -----------//
//------------------------------------------------//
  	
	$('form').submit(function(e) {
		e.preventDefault();
		var userGuess = +(document.getElementById("userGuess").value);
		$("#userGuess").val("");
	 		
		if(userGuess < 1 || userGuess > 100) {
			alert("Please Enter a Number Between 1 and 100");
	  	}	
	  	else {
	  		count++;
	  		checkDifference(userGuess);
	  		countAppend(userGuess);
	  	}
	});
//------------------------------------------------// 


//---- THIS IS THE CHECK-DIFFERENCE FUNCTION -----//
//---- THIS IS THE MAIN OPERATION OF THE GAME ----//
//------------------------------------------------//
  	function checkDifference (userGuess) {
		if (userGuess == secretNumber) {
			$("#feedback").html("You Won! Click New Game!"); 
		}	
		else {
			feedback(Math.abs(userGuess - secretNumber));
		}	
	}
//------------------------------------------------//



//---- THIS IS THE FEEDBACK FUNCTION -------------//
//------------------------------------------------//
	function feedback(difference) {
		if (difference >= 50) {
			$("#feedback").html("Ice Ice Cold");
		}
		else if (difference >= 30 && difference <= 49) {
			$("#feedback").html("Ice Cold");
		}
		else if (difference >= 20 && difference <= 29) {
			$("#feedback").html("Cold");
		}
		else if (difference >= 10 && difference <= 19) {
			$("#feedback").html("Warm");
		}
		else if (difference >= 5 && difference <= 9) {
			$("#feedback").html("Hot");
		}
		else  {
			$("#feedback").html("Very Very Hot");
		}
	}
//------------------------------------------------//



//---- THIS IS THE COUNT-APPEND FUNCTION ---------//
//------------------------------------------------//
	function countAppend(userGuess) {
			$("#count").html(count);
			$('ul#guessList').append('<li>' + userGuess + '</li>');
	}
//------------------------------------------------//

});

