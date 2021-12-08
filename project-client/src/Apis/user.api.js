import Cookies from 'js-cookie';

const createPostApi = async body => {
	const token = Cookies.get('jwt');
	console.log(body, '5');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/users/createPost',
		{
			method: 'POST',
			mode: 'cors',
			headers: {
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: body
		}
	);
	return response.json();
};

const getCategoryApi = async () => {
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/category/getAllCategory',
		{
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};

const updateNameApi = async body => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/updatename',
		{
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: JSON.stringify(body)
		}
	);
	return response.json();
};

const updateImageApi = async body => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/updateimage',
		{
			method: 'POST',
			mode: 'cors',
			headers: {
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: body
		}
	);
	return response.json();
};

const updatePassWordApi = async body => {
	console.log(body, '73');
	const token = Cookies.get('jwt');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/updatepassword',
		{
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: JSON.stringify(body)
		}
	);
	return response.json();
};

export {
	createPostApi,
	getCategoryApi,
	updateNameApi,
	updateImageApi,
	updatePassWordApi
};
