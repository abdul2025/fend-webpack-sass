function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById('name').value;

	Client.checkForName(formText);

	console.log('::: Form Submitted :::');
	// fetch('http://localhost:8081/test')
	// 	.then((res) => {
	// 		return res.json();
	// 	})
	// 	.then(function (data) {
	// 		document.getElementById('results').innerHTML = data.message;
	// 	});

	const api = `http://api.openweathermap.org/data/2.5/weather?q=`;
	const key = '&units=metric&APPID=780ae065c3854c8733dcae94ca8cac6a';
	fetch(`${api}${formText}${key}`)
		.then((res) => {
			return res.json();
		})
		.then(function (data) {
			console.log(data);
			document.getElementById(
				'results'
			).innerHTML = `${data.name} temp: ${data.main.temp}`;
		})
		.catch(function (err) {
			console.log('from api');
			console.log(err);
		});
}

export { handleSubmit };
