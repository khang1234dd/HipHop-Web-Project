import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link } from 'react-router-dom';
export const OTPForgotPassword = () => {
	return (
		<>
			<div className='otpforgotpassword-block'>
				<div className='otpforgotpassword'>
					<div className='otpforgotpassword-heading'>Forgot Password</div>
					<div className='otpforgotpassword-form'>
						<form action='#' className='otpforgotpassword-form-adjust'>
							<Input name='Please enter 6 letters'></Input>

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
