import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link, useNavigate } from 'react-router-dom';
import toastNotify from '../../../Components/Toast';
import { otpForgotPasswordApi } from '../../../Apis/auth.api';
import validate from './validate';
import Cookies from 'js-cookie';
export const OTPForgotPassword = () => {
	const navigate = useNavigate();
	const otpforgot = async e => {
		e.preventDefault();
		const otp = e.target.OTP.value;
		const validdata = validate(otp);
		if (validdata) {
			const res = await otpForgotPasswordApi({ otp });
			if (res.success) {
				toastNotify('Please enter your new password', 'success');
				navigate(`/newpassword/${otp}`);
			} else {
				toastNotify(res.message, 'error');
			}
		}
	};

	return (
		<>
			<div className='otpforgotpassword-block'>
				<div className='otpforgotpassword'>
					<div className='otpforgotpassword-heading'>Forgot Password</div>
					<div className='otpforgotpassword-form'>
						<form
							onSubmit={otpforgot}
							className='otpforgotpassword-form-adjust'>
							<Input name='OTP'></Input>

							<div className='otpforgotpassword-form-button'>
								<ButtonHipHop name='Go !'></ButtonHipHop>
								<p className='otpforgotpassword-form-already'>
									<span>Verify passcode has been sent to your email</span>
									<Link to='/https://mail.google.com/mail/u/0/'>
										Check now !
									</Link>
								</p>
								<Link to='/main'>
									<div className='otpforgotpassword-form-hometown'>
										Back to Town
									</div>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
