import React from 'react';
import './style.scss';
import { FcMusic } from 'react-icons/fc';
import { Link, useParams } from 'react-router-dom';

export const MusicList = ({ data }) => {
	return (
		<>
			<Link to={`/audioplayer/${data._id}`}>
				<FcMusic className='musiclist-icon'></FcMusic>
				<div className='musiclist-single'>{data.name}</div>
				<span className='musiclist-singer'>{data.ownersong}</span>
			</Link>
		</>
	);
};
