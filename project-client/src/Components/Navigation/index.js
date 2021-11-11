import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '../Container';
import ButtonHipHop from '../ButtonHipHop';

const Navigation = () => {
	return (
		<>
			<Container>
				<div className='navigation'>
					<div className='hamburger-block'>
						<IconButton aria-label=''>
							<MenuIcon></MenuIcon>
						</IconButton>
					</div>
					<div className='logo-block'>
						<img src={logo} className='logo'></img>
					</div>
					<div className='authentication-block'>
						<IconButton aria-label=''>
							<SearchIcon></SearchIcon>
						</IconButton>
						<Link to='/signin'>
							<ButtonHipHop name='Sign in'></ButtonHipHop>
						</Link>
						<Link to='/signup'>
							<ButtonHipHop name='Sign up'></ButtonHipHop>
						</Link>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Navigation;
