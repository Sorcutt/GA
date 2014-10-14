var userWins = ["rockscissors", "paperrock", "scissorspaper"];
var choices = ["rock", "paper", "scissors"];
var num = Math.floor(Math.random()*choices.length);
var computerChoice = choices(num);

function choiceClick(choice){
	var outComeMsg = evaluate(choice);
	displayOutcome(outComeMsg);	
}

function evaluate() {
	var msg = "Computer Wins!";

	if(userChoice==computerChoice) {
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

function displayOutcome(outComeMsg) {
	#('#outComeText').text(outComeMsg);
}