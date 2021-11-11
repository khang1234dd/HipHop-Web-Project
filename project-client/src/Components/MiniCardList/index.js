import React from 'react';
import { MiniCard } from '../MiniCard';
import './style.scss';

export const MiniCardList = props => {
	return (
		<>
			<div className='minicardlist'>
				{props.data.map(x => (
					<MiniCard
						color={x.color}
						link={x.link}
						heading={x.heading}
						writer={x.writer}
						time={x.time}></MiniCard>
				))}
			</div>
		</>
	);
};
