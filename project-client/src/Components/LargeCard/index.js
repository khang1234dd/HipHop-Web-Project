import React from 'react';
import { MiniCard } from '../MiniCard';
import { MiniCard2 } from '../MiniCard2';
import { MiniCardList } from '../MiniCardList';
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

export const LargeCard = props => {
	return (
		<>
			<div className='largecard-box largecard-box-rgb'>
				<div className='largecard-container'>
					<div className='largecard-container-main'>
						<MiniCard2
							variants={item}
							link='https://ichef.bbci.co.uk/news/976/cpsprodpb/1261F/production/_121459257_travisgetty.jpg'
							heading='Astroworld: questions over why Travis Scott played on as crush developed'></MiniCard2>
					</div>
					<div className='largecard-container-secondary'>
						<MiniCardList data={props.data}></MiniCardList>
					</div>
				</div>
			</div>
		</>
	);
};
