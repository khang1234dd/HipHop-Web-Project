import React from 'react';
import './style.scss';
import { HiCamera } from 'react-icons/hi';
import { Input } from '../../Input';
import Cookies from 'js-cookie';
import toastNotify from '../../Toast';

import ButtonHipHop from '../../ButtonHipHop';
import validate from './validate';
import { updateNameApi } from '../../../Apis/user.api';
import { Link } from 'react-router-dom';
export const ModalUserProfile = ({ closeModal, data }) => {
	const updateName = async e => {
		e.preventDefault();
		const name = e.target.Displayname.value;

		const isvaliddata = validate(name);
		if (isvaliddata) {
			const res = await updateNameApi({ name });

			if (res.success) {
				Cookies.set('jwt', res.token);
				toastNotify(
					'Your name was changed ,please reload page to see result!',
					'success'
				);
				closeModal(false);
			}
		}
	};

	console.log(data, '34');
	return (
		<>
			<div className='modal-wrapper'>
				<div className='modal-block'>
					<div className='modal-content'>
						<div className='modal-profilesetting'>
							<h2 className='modal-title'>Edit your profile</h2>
							<form onSubmit={updateName}>
								<div className='modal-profilesetting-form'>
									<div className='modal-profilesetting-form-block'>
										<div className='modal-profilesetting-form-block-avatar'>
											<div className='modal-profilesetting-form-block-image'>
												<img
													src={data.image}
													width='260px'
													height='260px'
													className='modal-profilesetting-form-block-image-adjust'></img>
												{/* <button className='modal-profilesetting-form-block-button'>
													<div>
														<HiCamera></HiCamera>
													</div>
													Upload image
													<input className='input1' type='file'></input>
												</button> */}
											</div>
										</div>

										<div className='modal-profilesetting-form-block-content'>
											<div className='modal-profilesetting-form-block-content-displayname'>
												<p>Display name : {data.name} </p>

												<Input type='text' name='Displayname'></Input>
											</div>
											{/* <div className='modal-profilesetting-form-block-content-infor'>
											<p>Password :{data.data.user.password}</p>
											<Input type='text' name='Display name'></Input>
										</div>
										<div className='modal-profilesetting-form-block-content-infor'>
											<p>Last name</p>
											<Input type='text' name='Display name'></Input>
										</div>
										<div className='modal-profilesetting-form-block-content-infor'>
											<p>City</p>
											<Input type='text' name='Display name'></Input>
										</div>
										<div className='modal-profilesetting-form-block-content-infor'>
											<p>Country</p>
											<Input type='text' name='Display name'></Input>
										</div>
										<div className='modal-profilesetting-form-block-content-bio'>
											<p>Bio</p>
											<TextareaAutosize
												aria-label='minimum height'
												minRows={5}
												placeholder='Tell the world a little bit about yourself .The shorter the better'
												style={{ width: 520 }}></TextareaAutosize>
										</div> */}
										</div>
									</div>
									<div className='modal-profilesetting-manage'>
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
