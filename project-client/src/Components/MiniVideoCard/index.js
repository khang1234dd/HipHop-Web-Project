import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { motion } from 'framer-motion';
import { fDateTime, fDate } from '../Admin/utils/formatTime';

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
export const MiniVideoCard = ({
	data,

	key,
	className
}) => {
	return (
		<>
			<motion.div variants={item} key={key}>
				<Link to={`/watchvideos/${data._id}`}>
					<div className='minivideocard-block'>
						<div className='minivideocard-block-image '>
							<img src={data.image} className='minivideocard-image'></img>
						</div>
						<div className='minivideocard-block-text'>
							<div className='minivideocard-block-text-adjust'>{data.name}</div>

							<div className='minivideocard-block-desc'>
								<span className='minivideocard-block-desc-author'>
									{data.ownervideo}
								</span>
								<span className='minivideocard-block-desc-time'>
									{fDateTime(data.createdAt)}
								</span>
							</div>
						</div>
					</div>
				</Link>
			</motion.div>
		</>
	);
};
