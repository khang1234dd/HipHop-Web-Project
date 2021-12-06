import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { motion } from 'framer-motion';
import { fDateTime, fDate } from '../Admin/utils/formatTime';

export const MiniCardWhiteText = props => {
	return (
		<>
			<motion.div variants={props.variants}>
				<Link to={`/newspaper/${props.data._id}`}>
					<div className='minicardwhitetext-block'>
						<div className='minicardwhitetext-block-image '>
							<img
								src={props.data.image}
								className='minicardwhitetext-image'></img>
						</div>
						<div className='minicardwhitetext-block-text'>
							<div className={props.className}>
								<div className='minicardwhitetext-block-text-adjust'>
									{props.data.name}
								</div>
							</div>
							<div className='minicardwhitetext-block-desc'>
								<span className='minicardwhitetext-block-desc-author'>
									{props.data.owner.name}
								</span>
								<span className='minicardwhitetext-block-desc-time'>
									{fDateTime(props.data.createdAt)}
								</span>
							</div>
						</div>
					</div>
				</Link>
			</motion.div>
		</>
	);
};
