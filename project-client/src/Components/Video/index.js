import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const Video = ({ data }) => {
	return (
		<>
			<Link to={`/watchvideos/${data._id}`}>
				<div className='video-block'>
					<div className='video-block-image '>
						<img src={data.image} className='video-image'></img>
					</div>
					<div className='video-block-text'>
						<div className='video-block-text-adjust'>{data.name}</div>
						<div className='video-block-desc'>
							<span className='video-block-desc-author'>{data.ownervideo}</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};
