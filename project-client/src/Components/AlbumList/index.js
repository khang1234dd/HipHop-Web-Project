import React from 'react';
import { Album } from '../Album';

export const AlbumList = props => {
	return (
		<>
			{props.data.map(x => (
				<Album link={x.link} header={x.header}></Album>
			))}
		</>
	);
};
