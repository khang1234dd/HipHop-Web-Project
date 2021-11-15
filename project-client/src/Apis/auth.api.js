import Cookies from 'js-cookie';
const signinApi = async body => {
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

const authenticateApi = async () => {
	const token = Cookies.get('jwt');
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/user',
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return await response.json();
};

const signupApi = async body => {
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/signup',
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

const checkotpsignupApi = async body => {
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/checkotpsignup',
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

const forgotpasswordApi = async body => {
	console.log(body)
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/forgetpassword',
		{
			method: 'POST',
			mode: 'cors',
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

const otpForgotPasswordApi = async body => {
	const response = await fetch(
		'https://hiphop-g28.herokuapp.com/authenticate/checkotpfg',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	);

	return response.json();
};

export {
	authenticateApi,
	signinApi,
	signupApi,
	checkotpsignupApi,
	forgotpasswordApi,
	otpForgotPasswordApi
};
