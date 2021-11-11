import React from 'react';
import './style.scss';
import { FcMusic } from 'react-icons/fc';

export const MusicList = props => {
	return (
		<>
			<FcMusic className='musiclist-icon'></FcMusic>
			<div className='musiclist-single'>{props.name}</div>
			<span className='musiclist-singer'>{props.singer}</span>
		</>
	);
};
