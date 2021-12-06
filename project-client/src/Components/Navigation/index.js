import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.png';
import Container from '../Container';
import ButtonHipHop from '../ButtonHipHop';
import NavigationBar from '../NavigationBar';
import { motion } from 'framer-motion';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const banner = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1
		}
	}
};

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

const Navigation = ({ ...data }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleAnchorElMenuAvatar = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseMenuAvatar = () => {
		setAnchorEl(null);
	};
	return (
		<>
			{data.user ? (
				<motion.div variants={banner}>
					<Container>
						<div className='navigation'>
							<div className='hamburger-block'>
								<Link to='/'>
									<img src={logo} className='logo'></img>
								</Link>
							</div>
							<div className='logo-block'>
								<motion.div
									variants={letter}
									initial='initial'
									animate='animate'
									className='navigationbar-block'>
									<div className='navigationbar-container'>
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
										<div>
											<IconButton
												onClick={handleAnchorElMenuAvatar}
												color='inherit'
												sx={{ p: 0.5 }}>
												<Avatar
													src={
														'https://hiphop-g28.herokuapp.com/' +
														data.user.image
													}
													alt='My Avatar'
												/>
											</IconButton>
											<Menu
												anchorEl={anchorEl}
												open={open}
												onClose={handleCloseMenuAvatar}
												onClick={handleCloseMenuAvatar}
												sx={{ disableScrollLock: true }}
												PaperProps={{
													elevation: 2,
													sx: {
														overflow: 'visible',
														filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
														mt: 1.5,
														'& .MuiAvatar-root': {
															width: 32,
															height: 32,
															ml: -0.5,
															mr: 1
														},
														'&:before': {
															content: '""',
															display: 'block',
															position: 'absolute',
															top: 0,
															right: 14,
															width: 10,
															height: 10,
															bgcolor: 'background.paper',
															transform: 'translateY(-50%) rotate(45deg)',
															zIndex: 100
														}
													}
												}}
												transformOrigin={{
													horizontal: 'right',
													vertical: 'top'
												}}
												anchorOrigin={{
													horizontal: 'right',
													vertical: 'bottom'
												}}>
												<Box sx={{ margin: '12px 0px', padding: '0px 20px' }}>
													<Typography
														sx={{
															fontFamily: 'Public Sans, sans-serif',
															fontWeight: '600'
														}}
														variant='subtitle1'
														noWrap
														component='h6'>
														Kha Zoo
													</Typography>
													<Typography
														sx={{
															fontFamily: 'Public Sans, sans-serif',
															color: '#637381'
														}}
														variant='body2'
														noWrap
														component='p'>
														khang@gmail.cơm
													</Typography>
												</Box>
												<Divider />
												<MenuItem component='a'>
													<HomeIcon sx={{ marginRight: '16px' }} /> Home
												</MenuItem>

												<MenuItem component={Link} to='/userprofile'>
													<PersonIcon sx={{ marginRight: '16px' }} /> Profile
												</MenuItem>

												<MenuItem>
													<ListItemIcon>
														<Logout fontSize='small' />
													</ListItemIcon>
													Logout
												</MenuItem>
											</Menu>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</Container>
				</motion.div>
			) : (
				<motion.div variants={banner}>
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
				</motion.div>
			)}
		</>
	);
};

export default Navigation;
