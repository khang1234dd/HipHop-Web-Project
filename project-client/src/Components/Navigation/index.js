import React from 'react';

import './style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '../Container';

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
						<Button>Sign in</Button>
						<Button color='secondary'>Sign up</Button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Navigation;
