import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = displayname => {
	const isDisplayName = validator.isEmpty(displayname);
	const isDisplayNameLength = validator.isLength(displayname, { min: 6 });
	if (isDisplayName) {
		toastNotify('Please enter Display Name', 'error');
		return false;
	} else if (!isDisplayNameLength) {
		toastNotify('Please enter at least 6 characters', 'error');
		return false;
	}

	// const isPassword = validator.isEmpty(password);

	return {
		displayname
	};
};

export default validate;
