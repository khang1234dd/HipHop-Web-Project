import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import validate from './validate';
import { newpasswordApi } from '../../../Apis/auth.api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toastNotify from '../../../Components/Toast';
import Cookies from 'js-cookie';
export const NewPassword = () => {
	const { otp } = useParams();
	const navigate = useNavigate();
	const newpassword = async e => {
		e.preventDefault();
		const newpassword = e.target.NewPassword.value;
		const newpasswordconfirm = e.target.ConfirmPassword.value;
		const isvaliddata = validate(newpassword, newpasswordconfirm);
		if (isvaliddata) {
			const res = await newpasswordApi({
				newpassword,
				newpasswordconfirm,
				otp
			});

			if (res.success) {
				toastNotify('Your password is reseted', 'success');
				navigate('/signin');
			} else {
				toastNotify(res.message, 'error');
			}
		}
	};
	return (
		<>
			<div className='newpassword-block'>
				<div className='newpassword'>
					<div className='newpassword-heading'>New Password</div>
					<div className='newpassword-form'>
						<form onSubmit={newpassword} className='newpassword-form-adjust'>
							<Input name='NewPassword'></Input>
							<Input name='ConfirmPassword'></Input>
							<div className='newpassword-form-button'>
								<ButtonHipHop name='Go !'></ButtonHipHop>
								<p className='newpassword-form-already'>
									<span>Didn't have an account ?</span>
									<a>Sign up now</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
