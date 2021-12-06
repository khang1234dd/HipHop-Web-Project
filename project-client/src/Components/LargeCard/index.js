import { React, useEffect } from 'react';
import { MiniCard } from '../MiniCard';
import { MiniCard2 } from '../MiniCard2';
import { MiniCardWhiteText } from '../MiniCardWhiteText';
import { MiniCardWhiteTextList } from '../MiniCardWhiteTextList';
import './largecard.scss';

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

export const LargeCard = ({ data, index }) => {
	return (
		<>
			{data && index === 0 ? (
				<div className='largecard-container-main'>
					<MiniCard2 variants={item} data={data}></MiniCard2>
				</div>
			) : (
				<div className='largecard-container-secondary'>
					<MiniCardWhiteText data={data}></MiniCardWhiteText>
				</div>
			)}
		</>
	);
};
