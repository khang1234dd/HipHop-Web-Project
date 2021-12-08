import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = image => {
	const isImage = validator.isEmpty(displayname);

	if (isDisplayName) {
		toastNotify('Please enter Display Name', 'error');
		return false;
	}

	// const isPassword = validator.isEmpty(password);

	return {
		displayname
	};
};

export default validate;
