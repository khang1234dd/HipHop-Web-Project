import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = (password, passwordconfirm) => {
	const isPassword = validator.isEmpty(password);
	if (isPassword) {
		toastNotify('Please enter your password', 'error');
		return false;
	}
	const isStrongPassword = validator.isStrongPassword(password);
	if (!isStrongPassword) {
		toastNotify('Your password too weak', 'error');
		return false;
	}
	const confirmPassword = validator.equals(passwordconfirm, password);
	if (!confirmPassword) {
		toastNotify('Please enter right password', 'error');
		return false;
	}
	return {
		password,
		passwordconfirm
	};
};

export default validate;
