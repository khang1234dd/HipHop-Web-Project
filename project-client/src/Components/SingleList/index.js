import React from 'react';
import './style.scss';
import { FcMusic } from 'react-icons/fc';

import { MusicList } from '../MusicList';

export const SingleList = props => {
	return (
		<>
			<ul className='singlelist'>
				{props.data.map(x => (
					<li className='singlelist-block'>
						<MusicList name={x.content} singer={x.singer}></MusicList>
					</li>
				))}
			</ul>
		</>
	);
};
