import { motion, MotionConfig } from 'framer-motion';
import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const MiniCard2 = props => {
	return (
		<>
			<Link to={`/newspaper/${props.data._id}`}>
				<motion.div variants={props.variants} data={props.data}>
					<div className='minicard2-block '>
						<div className='minicard2-block-image '>
							<img src={props.data.image} className='minicard2-image'></img>
						</div>
						<div className='minicard2-block-text'>
							<div className='minicard2-block-text-adjust'>
								{props.data.name}
							</div>
							{/* <div className='minicard2-block-desc'>
						<span className='minicard2-block-desc-author'>{props.writer}</span>
						<span className='minicard2-block-desc-time'>{props.time}</span>
					</div> */}
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
};
