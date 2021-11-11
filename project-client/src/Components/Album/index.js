import React from 'react';
import './style.scss';

export const Album = props => {
	return (
		<>
			<div className='album-block'>
				<img className='album-image' src={props.link}></img>
				<p className='album-header'>{props.header}</p>
			</div>
		</>
	);
};
