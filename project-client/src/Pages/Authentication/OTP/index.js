import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link } from 'react-router-dom';
export const OTP = () => {
	return (
		<>
			<div className='otp-block'>
				<div className='otp'>
					<div className='otp-heading'>Sign in</div>
					<div className='otp-form'>
						<form action='#' className='otp-form-adjust'>
							<Input name='Please enter 6 letters'></Input>

							<div className='otp-form-button'>
								<ButtonHipHop name='Go !'></ButtonHipHop>
								<p className='otp-form-already'>
									<span>Verify passcode has been sent to your email</span>
									<Link to='/https://mail.google.com/mail/u/0/'>
										Check now !
									</Link>
								</p>
								<Link to='/main'>
									<div className='otp-form-hometown'>Back to Town</div>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
