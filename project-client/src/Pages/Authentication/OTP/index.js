import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link, useNavigate } from 'react-router-dom';
import { checkotpsignupApi } from '../../../Apis/auth.api';
import validate from './validate';
import toastNotify from '../../../Components/Toast';

export const OTP = () => {
	const navigate = useNavigate();
	const otp = async e => {
		e.preventDefault();
		const otp = e.target.OTP.value;
		const isvaliddata = validate(otp);
		if (isvaliddata) {
			const res = await checkotpsignupApi({ otp });
			if (res.success) {
				toastNotify('Success', 'success');
				navigate('/signin');
			} else {
				toastNotify(res.err.message, 'error');
			}
		}
	};
	return (
		<>
			<div className='otp-block'>
				<div className='otp'>
					<div className='otp-heading'>Sign in</div>
					<div className='otp-form'>
						<form onSubmit={otp} className='otp-form-adjust'>
							<Input name='OTP'></Input>

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
