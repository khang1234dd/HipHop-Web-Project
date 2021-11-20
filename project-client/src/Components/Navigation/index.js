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
import NavigationBar from '../NavigationBar';

const Navigation = () => {
	return (
		<>
			<Container>
				<div className='navigation'>
					<div className='hamburger-block'>
						<Link to='/'>
							<img src={logo} className='logo'></img>
						</Link>
					</div>
					<div className='logo-block'>
						<NavigationBar></NavigationBar>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Navigation;
