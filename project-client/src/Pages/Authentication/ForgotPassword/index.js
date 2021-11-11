import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link } from 'react-router-dom';
export const ForgotPassword = () => {
	return (
		<>
			<div className='forgotpassword-block'>
				<div className='forgotpassword'>
					<div className='forgotpassword-heading'>Forgot Password</div>
					<div className='forgotpassword-form'>
						<form action='#' className='forgotpassword-form-adjust'>
							<Input name='Username'></Input>
							<Input name='Email'></Input>
							<div className='forgotpassword-form-button'>
								<Link to='/otpforgotpassword'>
									<ButtonHipHop name='Go !'></ButtonHipHop>
								</Link>

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
