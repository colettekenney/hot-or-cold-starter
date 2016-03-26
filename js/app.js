
$(document).ready(function(){
//------ DECLARE VARIABLES WHEN PAGE LOADS -------//
	var secretNumber = Math.floor(Math.random()*100)+1;
	var count = 0;
	var gameOver = false;


//---------------- GET USER GUESS ----------------//
	$('form').submit(function(e) {
		//using $('form').submit prevents either pressing the
		//enter key, or clicking submit button from running
		//the default submit function of the form
		e.preventDefault();
		//as long as gameOver == false the rest of the 
		//code will run
		if (gameOver == false) {
			//we create a new variable for the userGuess
			//we use Math.round so it's an integer
			var userGuess = Math.round($('#userGuess').val());
			//this next line resets the value in the form to
			//blank after receiving the user's guess
			$('#userGuess').val('');
			//console.log was used here to make sure we were
			//getting the userGuess
			//console.log(userGuess);
			
			//then we increment the count, 
			count++;
			//console.log was used to make sure we were incrementing
			//the count
			//console.log(count);
			
			//then we write the count to the #count id
			updateCount();
			
			//then we append the userGuess to the ul
			appendGuess(userGuess);
			
			//then we check the difference between userGuess and secretNumber
			checkDifference(userGuess);
		}
		
	});


//------------- UPDATE COUNT FUNCTION ------------//
//this function replaces #count id with the new incremented
//count number	
	function updateCount() {
		$('#count').html(count);
	}


//------------- APPEND GUESS FUNCTION ------------//
//this function appends a new <li> with the value of the
//last userGuess 
	function appendGuess(userGuess) {
		$('ul#guessList').append('<li>' + userGuess + '</li>');
	}


//---- THIS IS THE CHECK-DIFFERENCE FUNCTION -----//
//this function first checks to see if userGuess == secretNumber
//because this is the easiest case, if not, the code keeps running
  	function checkDifference (userGuess) {
		if (userGuess == secretNumber) {
			$("#feedback").html("You Won! Click New Game!"); 
		}	
		else {
			//here we are calling another function but 
			//rather than create a variable called difference 
			//within the {} of this function, we are just putting
			//the Math.abs calculation directly in the function's  
			//() brackets and then the result of this calculation is being
			//passed to the displayFeedback(difference) function below	
			displayFeedback(Math.abs(userGuess - secretNumber));
		}	
	}


//---- THIS IS THE DISPLAY-FEEDBACK FUNCTION ------//
//this function takes the result of the (Math.abs...) calculation above
//and passes it through as the variable "difference" and this  
//function displayFeedback compares difference to all the if, else if, else
//statements
	function displayFeedback(difference) {
		//here we are using one more function called feedback(x)
		//so that we don't have to write $("#feedback").html() 
		//over and over again to select the #feedback section 
		//of the form where we want to display the feedback message
		if (difference >= 50) {
			feedback("Ice Ice Cold");
		}
		else if (difference >= 30 && difference <= 49) {
			feedback("Ice Cold");
		}
		else if (difference >= 20 && difference <= 29) {
			feedback("Cold");
		}
		else if (difference >= 10 && difference <= 19) {
			feedback("Warm");
		}
		else if (difference >= 5 && difference <= 9) {
			feedback("Hot");
		}
		else  {
			feedback("Very Very Hot");
		}
	}

//------- THIS IS THE FEEDBACK FUNCTION ----------//
	//for this function to work, we need to name the parameter
	//in this case I chose x to prevent myself from getting confused
	//so x is the parameter, and within the {} of the function you have
	//to use the parameter within the .html() brackets because it is x
	//that is going to get replaced by the feedback message in the
	//if, else if, else statements above.
	function feedback(x) {
		$("#feedback").html(x);
	}

//- THIS CODE WAS PART OF JEYA'S ORIGINAL PROJECT-//
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

