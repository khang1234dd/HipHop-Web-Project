import React from 'react';
import { Album } from '../Album';
import Card3D from '../Card3D';

export const AlbumList = props => {
	return (
		<>
			{props.data.map(x => (
				<Card3D link={x.link} header={x.header}></Card3D>
			))}
		</>
	);
};
