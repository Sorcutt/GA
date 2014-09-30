function buttonClick(chosenLight){
	var redLight = document.getElementById('red-light');
	var yellowLight = document.getElementById('yellow-light');
	var greenLight = document.getElementById('green-light');

	yellowLight.style.backgroundColor = "#252525";
	redLight.style.backgroundColor = "#252525";
	greenLight.style.backgroundColor = "#252525";

	var whichLight = document.getElementById(chosenLight);
	if (chosenLight == 'red-light') {
		var color = '#ff0000';
	} else if (chosenLight == 'yellow-light') {
		var color = '#fffc00';
	} else {
		var color = '#007d18';
	}

	whichLight.style.backgroundColor = color;
}


// Looks good! Code is very functional, well written, and works perfectly. Well done!

// A few notes. As much as we can, we want to write flexible, reusable functions in our JavaScript. If we expand our program, we want the functions we write to be able to be re-used over and over again. 

// If/else statements are totally fine, but by writing one into our function, we're esentially hard-coding a set of conditions into our program. If we ever want to build a new traffic light with different colors, we'd need to re-write our function. We want to avoid that as much as possible.

// Instead, we could write something like this:


// function buttonClick(lightToTurnOn){
// 	turnLightsOff();
// 	turnLightOn(lightToTurnOn);
// }

// function turnLightsOff(){
// 	var greenLight = document.getElementById('green');
// 	var yellowLight = document.getElementById('yellow');
// 	var redLight = document.getElementById('red');

// 	greenLight.style.backgroundColor = "black";
// 	yellowLight.style.backgroundColor = "black";
// 	redLight.style.backgroundColor = "black";
// }

// function turnLightOn(lightToTurnOn){
// 	var whichLight = document.getElementById(lightToTurnOn);
// 	whichLight.style.backgroundColor = lightToTurnOn;
// }

// Each function pertains to one repeatable action, and the name of that function tells you it's purpose. Now, if we wanted to build a second traffic light that produces three totally new light colors, all we'd need to do is build the HTML so it fits with function "turnLightOn". Since the function is flexable -- meaning are are no hard-coded values inside of it -- it can be reused and applied in many different situations.

// When writing JavaScript, your goal should always be to write multiple functions, and each of your functions should only do one thing. If you find you're writing a function that does 5 different things, you should probably break out that function into multiple parts. This'll help modularize your code and will make it much more maintainable.

// Once we tackle jQuery, we'll also be able to cut down the length of the turnLightsOff function by a lot. 
