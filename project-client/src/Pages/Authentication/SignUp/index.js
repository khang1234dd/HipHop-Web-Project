import React from 'react';
import { Input } from '../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../Components/ButtonHipHop';
export const SignUp = () => {
	return (
		<>
			<div className='signup-block'>
				<div className='signup'>
					<div className='signup-heading'>Sign up</div>
					<div className='signup-form'>
						<form action='#' className='signup-form-adjust'>
							<Input name='Username'></Input>
							<Input name='Password'></Input>
							<Input name='Confirm Password'></Input>
							<Input name='Email'></Input>
							<div className='signup-form-button'>
								<ButtonHipHop name='Submit'></ButtonHipHop>
								<p className='signup-form-already'>
									<span>Already have an account ?</span>
									<a>Login</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
