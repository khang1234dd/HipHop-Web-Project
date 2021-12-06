import React from 'react';
import './singlecard.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-vanilla-tilt';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SingleCard3D = styled(Tilt)`
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

const item = {
	hidden: {
		opacity: 0,
		y: 200
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: { ease: 'easeInOut', duration: 0.8 }
	}
};
const SingleCard = ({ data }) => {
	return (
		<>
			<motion.div variants={item}>
				<Link to={`/audioplayer/${data._id}`}>
					<SingleCard3D options={{ speed: 400, max: 25 }}>
						<div className='singlecard-wrapper rgb'>
							<div className='singlecard-container'>
								<div className='singlecard-box'>
									<h2 className='singlecard-name'>{data.name}</h2>
									<Link className='singlecard-buy' to=''>
										<img
											src='https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-play-user-interface-kmg-design-flat-kmg-design.png'
											className='singlecard-play'
										/>
									</Link>
									{/* <div className='singlecard-circle '></div> */}
									<img src={data.image} className='singlecard-product'></img>
								</div>
							</div>
						</div>
					</SingleCard3D>
				</Link>
			</motion.div>
		</>
	);
};

export default SingleCard;
