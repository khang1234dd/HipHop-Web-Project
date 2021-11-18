import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-vanilla-tilt';
import styled from 'styled-components';

const Card3d = styled(Tilt)`
	width: 300px;
	padding: 0px !important;
	margin: 5px !important;
	background: rgb(255, 255, 255);
	border-radius: 4px;
	color: rgb(54, 73, 98);
	font-size: 16px;
	line-height: 1.6;
	box-shadow: rgba(20, 26, 40, 0.2) 0px 7px 42px;
	will-change: transform;
	transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
`;

const Card3D = props => {
	return (
		<>
			<Card3d options={{ speed: 400, max: 25 }}>
				<div className='card3d-wrapper'>
					<div className='card3d-container'>
						<div className='card3d-box'>
							<h2 className='card3d-name'>{props.header}</h2>
							<Link className='card3d-buy' to=''>
								<img
									src='https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-play-user-interface-kmg-design-flat-kmg-design.png'
									className='card3d-play'
								/>
							</Link>
							{/* <div className='card3d-circle '></div> */}
							<img src={props.link} className='card3d-product'></img>
						</div>
					</div>
				</div>
			</Card3d>
		</>
	);
};

export default Card3D;
