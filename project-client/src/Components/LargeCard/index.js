import React from 'react';
import { MiniCard } from '../MiniCard';
import { MiniCard2 } from '../MiniCard2';
import { MiniCardList } from '../MiniCardList';
import './largecard.scss';

export const LargeCard = props => {
	return (
		<>
			<div className='largecard-box largecard-box-rgb'>
				<div className='largecard-container'>
					<div className='largecard-container-main'>
						<MiniCard2
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
