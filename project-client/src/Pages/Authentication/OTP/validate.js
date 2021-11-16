import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = otp => {
	const isOTP = validator.isEmpty(otp);
	if (isOTP) {
		toastNotify('Please enter OTP', 'error');
		return false;
	}

	return {
		otp
	};
};

export default validate;
