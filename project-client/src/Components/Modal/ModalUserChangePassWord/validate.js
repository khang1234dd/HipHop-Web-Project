import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = (oldpassword, newpassword, newpasswordconfirm) => {
	const isOldPassWord = validator.isEmpty(oldpassword);

	if (isOldPassWord) {
		toastNotify('Please enter your old password', 'error');
		return false;
	}

	const isNewPassword = validator.isEmpty(newpassword);
	if (isNewPassword) {
		toastNotify('Please enter your new password', 'error');
		return false;
	}

	const isStrongPassword = validator.isStrongPassword(newpassword);
	if (!isStrongPassword) {
		toastNotify('Your new password is too weak', 'error');
		return false;
	}

	const confirmPassword = validator.equals(newpasswordconfirm, newpassword);
	if (!confirmPassword) {
		toastNotify('Please enter the right password', 'error');
		return false;
	}

	// const isPassword = validator.isEmpty(password);

	return {
		oldpassword,
		newpassword,
		newpasswordconfirm
	};
};

export default validate;
