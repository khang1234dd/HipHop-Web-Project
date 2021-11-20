import React from 'react';
import './musicvideocard.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-vanilla-tilt';
import styled from 'styled-components';

const MusicVideoCard3D = styled(Tilt)`
	width: 300px;
	padding: 0px !important;
	margin: 5px !important;
	background: rgb(255, 255, 255);
	border-radius: 20px !important;
	color: rgb(54, 73, 98);
	font-size: 16px;
	line-height: 1.6;
	box-shadow: rgba(20, 26, 40, 0.2) 0px 7px 42px;
	will-change: transform;
	transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
`;

const MusicVideoCard = props => {
	return (
		<>
			<MusicVideoCard3D options={{ speed: 400, max: 25 }}>
				<div className='musicvideocard-wrapper musicvideorgb'>
					<div className='musicvideocard-container'>
						<div className='musicvideocard-box'>
							<h2 className='musicvideocard-name'>{props.header}</h2>
							<Link className='musicvideocard-buy' to=''>
								<img
									src='https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-play-user-interface-kmg-design-flat-kmg-design.png'
									className='musicvideocard-play'
								/>
							</Link>
							{/* <div className='musicvideocard-circle '></div> */}
							<img src={props.link} className='musicvideocard-product'></img>
						</div>
					</div>
				</div>
			</MusicVideoCard3D>
		</>
	);
};

export default MusicVideoCard;
