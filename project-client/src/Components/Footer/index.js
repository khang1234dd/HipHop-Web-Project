import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../images/logo.png';
export const Footer = () => {
	return (
		<>
			<div className='footer-block'>
				<div className='footer-header'>
					Sections
					<p>
						<Link to='/main'>Home</Link>
					</p>
					<p>
						<Link to='/main'>News</Link>
					</p>
					<p>
						<Link to='/main'>Single</Link>
					</p>
					<p>
						<Link to='/main'>Article</Link>
					</p>
				</div>
				<div className='footer-ceremony'>
					This website is developed by KJ
					<p>Thank you for your supporting</p>
				</div>

				<div className='logo-footer-adjustment'>
					<img src={logo} className='logo'></img>
				</div>
			</div>
		</>
	);
};
