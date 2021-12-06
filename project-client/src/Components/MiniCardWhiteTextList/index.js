import React from 'react';
import { MiniCardWhiteText } from '../MiniCardWhiteText';
import './style.scss';
import styled from 'styled-components';
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

export const MiniCardWhiteTextList = props => {
	return (
		<>
			<div className='minicardlist'>
				{props.data.map(x => (
					<motion.div>
						<MiniCardWhiteText
							variants={item}
							link={x.link}
							heading={x.heading}
							writer={x.writer}
							time={x.time}></MiniCardWhiteText>
					</motion.div>
				))}
			</div>
		</>
	);
};
