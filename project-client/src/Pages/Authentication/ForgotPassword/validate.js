import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = (username, email) => {
	const isID = validator.isEmpty(username);
	if (isID) {
		toastNotify('Please enter your ID', 'error');
		return false;
	}

	const Email = validator.isEmpty(email);
	if (Email) {
		toastNotify('Please enter your email', 'error');
		return false;
	}
	const isEmail = validator.isEmail(email);
	if (!isEmail) {
		toastNotify('Email is not valid', 'error');
		return false;
	}

	return {
		username,

		email
	};
};

export default validate;
