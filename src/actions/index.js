import axios from 'axios';

export function submitText (event) {
	const text = event.target[0].value
	axios({
		url: 'http://localhost:8000',
		method: 'post',
		headers: {'Content-type': 'application/json', 'Accept': 'application/json'},
		data: {
			'text': text
		}
	})
	.then((response) => {
		console.log(response);
	});

	return {
		type: 'POST',
		payload: text
	}
}
