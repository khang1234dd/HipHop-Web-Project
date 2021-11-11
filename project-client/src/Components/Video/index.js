import React from 'react';
import './style.scss';

export const Video = props => {
	return (
		<>
			<div className='video-block'>
				<div className='video-block-image '>
					<img src={props.link} className='video-image'></img>
				</div>
				<div className='video-block-text'>
					<div className='video-block-text-adjust'>{props.heading}</div>
					<div className='video-block-desc'>
						<span className='video-block-desc-author'>{props.singer}</span>
					</div>
				</div>
			</div>
		</>
	);
};
