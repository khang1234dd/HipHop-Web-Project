import React from 'react';
import './style.scss';
import SingleCard from '../SingleCard';
import { motion } from 'framer-motion';

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
export const SingleCardList = ({ data }) => {
	return (
		<>
			{data.map(x => (
				<motion.div>
					<SingleCard
						variants={item}
						header={x.header}
						link={x.link}></SingleCard>
				</motion.div>
			))}
		</>
	);
};
