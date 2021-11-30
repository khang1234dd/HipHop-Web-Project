import React from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../Animations';

export const AnimationOne = props => {
	return (
		<>
			<motion.div
				initial='out'
				animate='in'
				exit='out'
				variants={animationOne}
				transition={transition}>
				{props.children}
			</motion.div>
		</>
	);
};
