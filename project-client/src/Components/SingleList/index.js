import React from 'react';
import './style.scss';
import { MusicList } from '../MusicList';
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

export const SingleList = props => {
	return (
		<>
			<ul className='singlelist'>
				{props.data.map(x => (
					<motion.div variants={letter} initial='initial' animate='animate'>
						<li className='singlelist-block'>
							<MusicList name={x.content} singer={x.singer}></MusicList>
						</li>
					</motion.div>
				))}
			</ul>
		</>
	);
};
