import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link, useNavigate } from 'react-router-dom';
import { forgotpasswordApi } from '../../../Apis/auth.api';
import toastNotify from '../../../Components/Toast';
import validate from './validate';
export const ForgotPassword = () => {
	const navigate = useNavigate();
	const forgotpassword = async e => {
		e.preventDefault();
		const username = e.target.Username.value;
		const email = e.target.Email.value;
		const validdata = validate(username, email);
		if (validdata) {
			const res = await forgotpasswordApi({ username, email });
			console.log(res);
			if (res.success) {
				toastNotify('Please check OTP passcode in your email', 'warn');
				navigate('/otpforgotpassword');
			} else {
				toastNotify(res.message, 'error');
			}
		}
	};
	return (
		<>
			<div className='forgotpassword-block'>
				<div className='forgotpassword'>
					<div className='forgotpassword-heading'>Forgot Password</div>
					<div className='forgotpassword-form'>
						<form
							onSubmit={forgotpassword}
							className='forgotpassword-form-adjust'>
							<Input type='text' name='Username'></Input>
							<Input type='text' name='Email'></Input>
							<div className='forgotpassword-form-button'>
								<ButtonHipHop name='Go !'></ButtonHipHop>
								<p className='forgotpassword-form-already'>
									<span>Didn't have an account ?</span>
									<Link to='/signup'>Sign up now</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
