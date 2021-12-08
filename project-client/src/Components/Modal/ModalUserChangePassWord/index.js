import React from 'react';
import './style.scss';
import { HiCamera } from 'react-icons/hi';
import { Input } from '../../Input';
import Cookies from 'js-cookie';
import toastNotify from '../../Toast';
import { useNavigate } from 'react-router-dom';
import ButtonHipHop from '../../ButtonHipHop';
import { updatePassWordApi } from '../../../Apis/user.api';
import validate from './validate';
// import { updateNameApi } from '../../../Apis/user.api';
// import { Link } from 'react-router-dom';
export const ModalUserChangePassWord = ({ closeModal, data }) => {
	const navigate = useNavigate();
	const changePassWord = async e => {
		e.preventDefault();
		const newpassword = e.target.NewPassword.value;
		const newpasswordconfirm = e.target.ConfirmPassword.value;

		const isvaliddata = validate(newpassword, newpasswordconfirm);
		console.log(newpassword,newpasswordconfirm)
		if (isvaliddata) {
			const res = await updatePassWordApi({
				newpassword,
				newpasswordconfirm
			});

			if (res.success) {
				toastNotify('Your password was changed', 'success');
				closeModal(false);
				navigate('/signin');
				window.location.reload();
			} else toastNotify(res.message, 'error');
		}
	};
	return (
		<>
			<div className='modaluserchangepassword-wrapper'>
				<div className='modaluserchangepassword-block'>
					<div className='modaluserchangepassword-content'>
						<div className='modaluserchangepassword-profilesetting'>
							<h2 className='modaluserchangepassword-title'>
								Edit your Password
							</h2>
							<form onSubmit={changePassWord}>
								<div className='modaluserchangepassword-profilesetting-form'>
									<div className='modaluserchangepassword-profilesetting-form-block'>
										<div className='modaluserchangepassword-profilesetting-form-block-avatar'>
											<div className='modaluserchangepassword-profilesetting-form-block-image'>
												<img
													src={data.image}
													width='260px'
													height='260px'
													className='modaluserchangepassword-profilesetting-form-block-image-adjust'></img>
												{/* <button className='modaluserchangepassword-profilesetting-form-block-button'>
													<div>
														<HiCamera></HiCamera>
													</div>
													Upload image
													<input className='input1' type='file'></input>
												</button> */}
											</div>
										</div>

										<div className='modaluserchangepassword-profilesetting-form-block-content'>
											<div className='modaluserchangepassword-profilesetting-form-block-content-displayname'>

												<p>New Password </p>

												<Input type='password' name='NewPassword'></Input>

												<p>Confirm Password </p>

												<Input type='password' name='ConfirmPassword'></Input>
											</div>
										</div>
									</div>
									<div className='modaluserchangepassword-profilesetting-manage'>
										<ButtonHipHop
											name='cancle'
											onClick={() => closeModal(false)}></ButtonHipHop>
										<ButtonHipHop type='submit' name='Save'></ButtonHipHop>
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
