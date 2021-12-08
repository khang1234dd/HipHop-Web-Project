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
export const MiniSongCard = ({
	data,

	key,
	className
}) => {
	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` });
	};
	return (
		<>
			<motion.div variants={item} key={key}>
				<Link onClick={handleClick} to={`/audioplayer/${data._id}`}>
					<div className='minisongcard-block'>
						<div className='minisongcard-block-image '>
							<img src={data.image} className='minisongcard-image'></img>
						</div>
						<div className='minisongcard-block-text'>
							<div className='minisongcard-block-text-adjust'>{data.name}</div>

							<div className='minisongcard-block-desc'>
								<span className='minisongcard-block-desc-author'>
									{data.ownersong}
								</span>
								<span className='minisongcard-block-desc-time'>
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
