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
export const MiniCard = ({
	data,

	key,
	className
}) => {
	return (
		<>
			<motion.div variants={item} key={key}>
				<Link to={`/newspaper/${data._id}`}>
					<div className='minicard-block'>
						<div className='minicard-block-image '>
							<img src={data.image} className='minicard-image'></img>
						</div>
						<div className='minicard-block-text'>
							<div className={className}>
								<div className={'minicard-block-text-adjust'}>{data.name}</div>
							</div>
							<div className='minicard-block-desc'>
								<span className='minicard-block-desc-author'>
									{data.owner.name}
								</span>
								<span className='minicard-block-desc-time'>
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
