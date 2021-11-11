console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	
	console.log('form submit');
		alert('form submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function handleMouse(evt) {
	evt.preventDefault();
	
	
	console.log('you did great today!');
		alert('you did great today!');
}

let image = document.querySelector('img#ducky');

image.addEventListener('mouseover', handleMouse);