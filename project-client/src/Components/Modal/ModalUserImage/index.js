import React, { useState } from 'react';
import './style.scss';
import { HiCamera } from 'react-icons/hi';
// import { Input } from '../../Input';
import Cookies from 'js-cookie';
import toastNotify from '../../Toast';

import ButtonHipHop from '../../ButtonHipHop';
import { updateImageApi } from '../../../Apis/user.api';
// import validate from './validate';
// import { updateNameApi } from '../../../Apis/user.api';
export const ModalUserImage = ({ closeModal, data }) => {
	const [selectedImage, setSelectedImage] = useState();

	const imageChange = e => {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedImage(e.target.files[0]);
		}
	};

	const updateImage = async e => {
		e.preventDefault();
		const image = e.target.input.files[0];
		if (image !== undefined) {
			const formData = new FormData();
			formData.append('image', image);
			const res = await updateImageApi(formData);
			if (res.success) {
				toastNotify(
					'Your image has been changed,please reload page to see result',
					'warn'
				);
			} else toastNotify(res.message, 'error');
		}
	};

	return (
		<>
			<div className='modaluserimage-wrapper'>
				<div className='modaluserimage-block'>
					<div className='modaluserimage-content'>
						<div className='modaluserimage-profilesetting'>
							<h2 className='modaluserimage-title'>Upload your image</h2>
							<form onSubmit={updateImage}>
								<div className='modaluserimage-profilesetting-form'>
									<div className='modaluserimage-profilesetting-form-block'>
										<div className='modaluserimage-profilesetting-form-block-avatar'>
											<div className='modaluserimage-profilesetting-form-block-image'>
												{selectedImage ? (
													<img
														alt='Thumb'
														src={URL.createObjectURL(selectedImage)}
														width='260px'
														height='260px'
														className='modaluserimage-profilesetting-form-block-image-adjust'></img>
												) : (
													<img
														alt='Thumb'
														src={data.image}
														width='260px'
														height='260px'
														className='modaluserimage-profilesetting-form-block-image-adjust'></img>
												)}
											</div>
										</div>

										<div className='modaluserimage-profilesetting-form-block-content'>
											<button className='modaluserimage-profilesetting-form-block-button'>
												<div>
													<HiCamera></HiCamera>
												</div>
												Upload image
												<input
													name='input'
													onChange={imageChange}
													className='input1'
													type='file'></input>
											</button>
										</div>
									</div>
									<div className='modaluserimage-profilesetting-manage'>
										<ButtonHipHop
											name='cancle'
											onClick={() => closeModal(false)}></ButtonHipHop>
										<ButtonHipHop name='Save'></ButtonHipHop>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
