import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

const letter = {
	initial: {
		y: 400
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	}
};
export const Heading = props => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: 80 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
				className='heading-title'>
				<h1 className='heading-title-name'>
					{props.name}
					<span className='heading-title-desc'>{props.desc}</span>
				</h1>
			</motion.div>
		</>
	);
};
