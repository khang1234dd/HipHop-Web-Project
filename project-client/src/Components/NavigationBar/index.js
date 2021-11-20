import React from 'react';
import Button from '@mui/material/Button';
import SplitButton from '../SplitButton';
import './style.scss';
import ButtonHipHop from '../ButtonHipHop';
import { Link } from 'react-router-dom';
const test = ['Nhac hot 100', 'bang xep hang ', 'top rapper	'];
const NavigationBar = () => {
	return (
		<>
			<div className='navigationbar-block'>
				<div className='navigationbar-container'>
					<div className='navigationbar-button'>
						{/* <Link to='/'>
							<ButtonHipHop name='home'></ButtonHipHop>
						</Link> */}
					</div>
					<div className='navigationbar-button'>
						<Link to='/news'>
							<ButtonHipHop name='news'></ButtonHipHop>
						</Link>
					</div>
					<div className='navigationbar-button'>
						<Link to='/single'>
							<ButtonHipHop name='Single'></ButtonHipHop>
						</Link>
					</div>
					<div className='navigationbar-button'>
						<Link to='/musicvideo'>
							<ButtonHipHop name='Music Video'></ButtonHipHop>
						</Link>
					</div>
					<div className='navigationbar-button'>
						<Link to='/signin'>
							<ButtonHipHop name='Sign in'></ButtonHipHop>
						</Link>
					</div>
					<div className='navigationbar-button'>
						<Link to='/signup'>
							<ButtonHipHop name='Sign up'></ButtonHipHop>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
