const signinapi = async body => {
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/signin',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: JSON.stringify(body)
		}
	);

	return response.json();
};
export { signinapi };
