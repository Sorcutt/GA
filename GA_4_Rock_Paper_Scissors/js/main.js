var userChoice = "paper";
var computerChoice = "rock";

//combined string outcomes:
var userWins = ["rockscissors", "paperrock", "scissorspaper"];

//generate computer choice:
var choices = ["rock", "paper", "scissors"];

computerChoice = choices[Math.random()*choices.length];

function evaluate() {
	var msg = "Computer Wins!";

	if (userChoice==computerChoice) {
		msg = "Tie!";
	} else {

		var outCome = userChoice + computerChoice;
		$.each(userWins, function(index, value) {
			if(outCome==value){
				msg = "You Win!"
			} 
		});
		return msg;
	}
}

var outComeMsg = evaluate();
alert(outComeMsg);