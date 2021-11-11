import React from 'react';
import { Video } from '../Video';
import './style.scss';

export const VideoList = props => {
	return (
		<>
			<div className='videolist'>
				{props.data.map(x => (
					<Video link={x.link} heading={x.heading} singer={x.singer}></Video>
				))}
			</div>
		</>
	);
};
