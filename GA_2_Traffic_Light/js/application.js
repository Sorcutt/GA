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