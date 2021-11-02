import React from 'react';
import { Input } from '../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../Components/ButtonHipHop';
export const SignIn = () => {
	return (
		<>
			<div className='signin-block'>
				<div className='signin'>
					<div className='signin-heading'>Sign in</div>
					<div className='signin-form'>
						<form action='#' className='signin-form-adjust'>
							<Input name='Username'></Input>
							<Input name='Password'></Input>
							<div className='signin-form-button'>
								<ButtonHipHop name='Go !'></ButtonHipHop>
								<p className='signin-form-already'>
									<span>Didn't have an account ?</span>
									<a>Sign up now</a>
								</p>
								<p className='forgotpassword'>
									<a>Forgot your Password</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
