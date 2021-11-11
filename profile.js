console.log("Hello Earthling");

function handleColor(evt) {
	evt.preventDefault();
	
	
	console.log('favorite color submit');
		alert('clay');
}


let favColor = document.querySelector('button#color');

favColor.addEventListener('click', handleColor);


function handlePlace(evt) {
	evt.preventDefault();
	
	
	console.log('favorite place submit');
		alert('Beaver Island');
}


let favPlace = document.querySelector('button#place');

favPlace.addEventListener('click', handlePlace);


function handleRitual(evt) {
	evt.preventDefault();
	
	
	console.log('favorite ritual submit');
		alert('lighting a candle and putting on a joni mitchell record');
}


let favRitual = document.querySelector('button#ritual');

favRitual.addEventListener('click', handleRitual);