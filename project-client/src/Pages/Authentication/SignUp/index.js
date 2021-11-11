import React from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link } from 'react-router-dom';
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
								<Link to='/otp'>
									<ButtonHipHop name='Submit'></ButtonHipHop>
								</Link>

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
