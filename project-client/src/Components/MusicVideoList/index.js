import React from 'react';

import Card3D from '../Card3D';
import MusicVideoCard from '../MusicVideoCard';

export const MusicVideoCardList = props => {
	return (
		<>
			{props.data.map(x => (
				<MusicVideoCard link={x.link} header={x.header}></MusicVideoCard>
			))}
		</>
	);
};
