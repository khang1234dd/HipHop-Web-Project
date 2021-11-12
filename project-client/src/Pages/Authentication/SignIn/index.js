import { React } from 'react';
import { Input } from '../../../Components/Input';
import './style.scss';
import ButtonHipHop from '../../../Components/ButtonHipHop';
import { Link } from 'react-router-dom';
import { signinApi } from '../../../Apis/auth.api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const SignIn = () => {
	const navigate = useNavigate();
	const signin = async e => {
		e.preventDefault();
		const username = e.target.Username.value;
		const password = e.target.Password.value;
		const res = await signinApi({ username, password });
		if (res.success) {
			Cookies.set('jwt', res.token);
			alert('dang nhap thanh cong');
			navigate('/main');
		} else {
			alert('try again');
		}
	};

	return (
		<>
			<div className='signin-block'>
				<div className='signin'>
					<div className='signin-heading'>Sign in</div>
					<div className='signin-form'>
						<form onSubmit={signin} className='signin-form-adjust'>
							<Input type='text' name='Username'></Input>
							<Input type='password' name='Password'></Input>
							<div className='signin-form-button'>
								{/* <Link to='/main'> */}
								<ButtonHipHop name='Go !'></ButtonHipHop>
								{/* </Link> */}

								<p className='signin-form-already'>
									<span>Didn't have an account ?</span>
									<Link to='/signup'>Sign up now</Link>
								</p>
								<p className='adjust'>
									<Link to='/forgotpassword'>Forgot your Password</Link>
								</p>
								<p className='adjust'>
									<Link to='/main'>Back to Town</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
