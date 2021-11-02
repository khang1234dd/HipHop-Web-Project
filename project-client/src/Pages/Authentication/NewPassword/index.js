import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
export const NewPassword = () => {
	return (
		<>
			<div className='newpassword-block'>
				<div className='newpassword'>
					<div className='newpassword-heading'>New Password</div>
					<div className='newpassword-form'>
						<form action='#' className='newpassword-form-adjust'>
							<Input name='Enter your new password'></Input>
							<Input name='Confirm your new password'></Input>
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
