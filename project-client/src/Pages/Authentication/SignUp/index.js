import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link, useNavigate } from 'react-router-dom';
import { signupApi } from '../../../Apis/auth.api';
import validate from './validate';
import toastNotify from '../../../Components/Toast';

export const SignUp = () => {
	const navigate = useNavigate();
	const signup = async e => {
		e.preventDefault();
		const username = e.target.Username.value;
		const password = e.target.Password.value;
		const passwordconfirm = e.target.PasswordConfirm.value;
		const email = e.target.Email.value;
		const validdata = validate(username, password, email, passwordconfirm);
		if (validdata) {
			const res = await signupApi({
				username,
				password,
				email,
				passwordconfirm
			});

			if (res.success) {
				toastNotify('Please check OTP passcode in your email', 'warn');
				navigate('/otp');
			} else {
				toastNotify(res.err.message, 'error');
			}
		}
	};
	return (
		<>
			<div className='signup-block'>
				<div className='signup'>
					<div className='signup-heading'>Sign up</div>
					<div className='signup-form'>
						<form onSubmit={signup} className='signup-form-adjust'>
							<Input type='text' name='Username'></Input>
							<Input type='password' name='Password'></Input>
							<Input type='password' name='PasswordConfirm'></Input>
							<Input type='email' name='Email'></Input>
							<div className='signup-form-button'>
								<ButtonHipHop name='Submit'></ButtonHipHop>

								<p className='signup-form-already'>
									<span>Already have an account ?</span>
									<Link to='/signin'>Login</Link>
								</p>
								<Link to='/main'>
									<div className='signup-form-back'>Back to Town</div>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
