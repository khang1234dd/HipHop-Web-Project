import Cookies from 'js-cookie';

const getCategoryApi = async body => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/admin/getAllCategory?_page=${body.page}&_limit=${body.limit}`,
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);

	return response.json();
};

const getAllCategoryApi = async () => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/admin/getAllCategory`,
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};

const createCategoryApi = async body => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/admin/createCategory',
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

const createPostApi = async body => {
	const token = Cookies.get('jwt');
	console.log('body', body);
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/users/createPost',
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

const getAllPostApi = async body => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/admin/getAllPost?_page=${body.page}&_limit=${body.limit}`,
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);

	return response.json();
};

export {
	createCategoryApi,
	getAllCategoryApi,
	getCategoryApi,
	getAllPostApi,
	createPostApi
};
