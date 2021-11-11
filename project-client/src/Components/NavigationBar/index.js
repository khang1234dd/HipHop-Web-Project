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
						<Link to='/main'>
							<ButtonHipHop name='home'></ButtonHipHop>
						</Link>
					</div>
					<div className='navigationbar-button'>
						<ButtonHipHop name='news'></ButtonHipHop>
					</div>
					<div className='navigationbar-button'>
						<ButtonHipHop name='Single'></ButtonHipHop>
					</div>
					<div className='navigationbar-button'>
						<ButtonHipHop name='Article'></ButtonHipHop>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
