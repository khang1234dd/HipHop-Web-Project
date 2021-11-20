import React from 'react';
import './style.scss';
import SingleCard from '../SingleCard';

export const SingleCardList = props => {
	return (
		<>
			{props.data.map(x => (
				<SingleCard header={x.header} link={x.link}></SingleCard>
			))}
		</>
	);
};
