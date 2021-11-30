import React from 'react';
import { Article } from '../Article';
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
export const ArticleList = props => {
	return (
		<>
			<motion.div variants={letter} initial='initial' animate='animate'>
				<ul className='articlelist-adjust'>
					{props.data.map(x => (
						<li className='articlelist-adjust-block'>
							<Article content={x.content}></Article>
						</li>
					))}
				</ul>
			</motion.div>
		</>
	);
};
