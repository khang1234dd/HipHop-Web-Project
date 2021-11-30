import React from 'react';
import './style.scss';
import { HiCamera } from 'react-icons/hi';
import { Input } from '../../Components/Input';
import { InputBase, TextareaAutosize } from '@mui/material';
import ButtonHipHop from '../ButtonHipHop';
export const ModalUserProfile = ({ closeModal }) => {
	return (
		<>
			<div className='modal-wrapper'>
				<div className='modal-block'>
					<div className='modal-content'>
						<div className='modal-profilesetting'>
							<h2 className='modal-title'>Edit your profile</h2>
							<div className='modal-profilesetting-form'>
								<div className='modal-profilesetting-form-block'>
									<div className='modal-profilesetting-form-block-avatar'>
										<div className='modal-profilesetting-form-block-image'>
											<img
												src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0OyqAQDJsRYUObsRMVEgge1KD0pWz3kLJ7M4aIIONrGKWQgE4VPAty7IYt_Ieh3S744&usqp=CAU'
												width='260px'
												height='260px'
												className='modal-profilesetting-form-block-image-adjust'></img>
											<button className='modal-profilesetting-form-block-button'>
												<div>
													<HiCamera></HiCamera>
												</div>
												Update Image
											</button>
										</div>
									</div>

									<div className='modal-profilesetting-form-block-content'>
										<div className='modal-profilesetting-form-block-content-displayname'>
											<p>Display name</p>
											<Input type='text' name='Display name'></Input>
										</div>
										<div className='modal-profilesetting-form-block-content-infor'>
											<p>First name</p>
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
										</div>
									</div>
								</div>
								<div className='modal-profilesetting-manage'>
									<ButtonHipHop
										name='cancle'
										onClick={() => closeModal(false)}></ButtonHipHop>
									<ButtonHipHop name='Save'></ButtonHipHop>
								</div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
