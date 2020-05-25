function checkForName(inputText) {
	console.log('::: Running checkForName :::', inputText);
	console.log('::: Running checkForName :::', inputText);
	let names = ['wahbi', 'Janeway', 'Kirk', 'Archer', 'Georgiou'];

	if (names.includes(inputText)) {
		alert('Welcome, Captain!');
	}
}

export { checkForName };
