import validator from 'validator';
import toastNotify from '../../../Components/Toast';

const validate = (header, category, tinydesc, image, description) => {
	const isHeader = validator.isEmpty(header);
	if (isHeader) {
		toastNotify('Please enter Header', 'error');
		return false;
	}
	const isCategory = validator.isEmpty(category);
	if (isCategory) {
		toastNotify('Please choose Category', 'error');
		return false;
	}

	const isTinydesc = validator.isEmpty(tinydesc);
	if (isTinydesc) {
		toastNotify('Please type description for your post', 'error');
		return false;
	}

	if (image === undefined) {
		toastNotify('Please choose one image for your post', 'error');
		return false;
	}

	const isDesc = validator.isEmpty(description);
	if (isDesc) {
		toastNotify('Content must be filled', 'error');
		return false;
	}
	return {
		header,
		category,
		tinydesc,
		image,
		description
	};
};

export default validate;
