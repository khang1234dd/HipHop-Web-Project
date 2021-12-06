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

export { createPostApi, getCategoryApi };
