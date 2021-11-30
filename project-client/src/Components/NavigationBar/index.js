import React from 'react';
import Button from '@mui/material/Button';
import SplitButton from '../SplitButton';
import './style.scss';
import ButtonHipHop from '../ButtonHipHop';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const letter = {
	initial: {
		x: 1000
	},
	animate: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 2
		}
	}
};
const NavigationBar = () => {
	return (
		<>
			<motion.div
				variants={letter}
				initial='initial'
				animate='animate'
				className='navigationbar-block'>
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
			</motion.div>
		</>
	);
};

export default NavigationBar;
