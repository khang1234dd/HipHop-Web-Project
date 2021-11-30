import validator from 'validator';
import toastNotify from '../../../Toast';

const vlCreateCategory = (categoryname, categorytinydes) => {
	const isEmptyName = validator.isEmpty(categoryname);
    const isLengthName = validator.isLength(categoryname,{min:2, max:20})
    const isLengthTiny = validator.isLength(categorytinydes,{min:10, max:40})
	if (isEmptyName) {
		toastNotify('Please enter your Category Name', 'error');
		return false;
	}else if(!isLengthName) {
        toastNotify('Please your category name doesnt less than 2 characters', 'error');
		return false;
    }
	const idEmptyTiny = validator.isEmpty(categorytinydes);
	if (idEmptyTiny) {
		toastNotify('Please enter your TinyDescription', 'error');
		return false;
	}
    else if(!isLengthTiny) {
        toastNotify('Please your category tiny description doesnt less than 10 characters', 'error');
		return false;
    }
	return {
		categoryname,
		categorytinydes,
	};
};

const vlCreatePost = (namePost, tinydes, description,categoryId, image) => {
	//Empty
	const isEmptyName = validator.isEmpty(namePost);
	const isEmptyTiny = validator.isEmpty(tinydes);
	const isEmptyDes = validator.isEmpty(description);
	const isEmptyCat = validator.isEmpty(categoryId);


	

	//Length
    const isLengthName = validator.isLength(namePost,{min:2})
    const isLengthTiny = validator.isLength(tinydes,{min:6})
	const isLengthDes = validator.isLength(description,{min:20})
	const isLengthCatId = validator.isMongoId(categoryId)

	if (isEmptyName) {
		toastNotify('Please enter your Post Name', 'error');
		return false;
	}
	else if(!isLengthName) {
        toastNotify('Please your post name doesnt less than 2 characters', 'error');
		return false;
    }

	if (isEmptyCat) {
		toastNotify('Please choose your Category', 'error');
		return false;
	} else if(!isLengthCatId){
		toastNotify('category is wrong', 'error');
	}

	if (isEmptyTiny) {
		toastNotify('Please enter your Tiny Description', 'error');
		return false;
	}
    else if(!isLengthTiny) {
        toastNotify('Please your category tiny description doesnt less than 6 characters', 'error');
		return false;
    }

	if (isEmptyDes) {
		toastNotify('Please enter your Description', 'error');
		return false;
	}
	else if(!isLengthDes) {
        toastNotify('Please your post description doesnt less than 20 characters', 'error');
		return false;
    }

	if(image === undefined){
		toastNotify('Please upload your post image', 'error');
		return false;
	}

	return {
		namePost,
		tinydes,
		description,
		categoryId,
		image,
	};
};


export {
    vlCreateCategory,
	vlCreatePost
};
