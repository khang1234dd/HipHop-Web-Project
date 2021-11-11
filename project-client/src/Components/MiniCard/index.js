import React from 'react';
import './style.scss';

export const MiniCard = props => {
	return (
		<>
			<div className='minicard-block'>
				<div className='minicard-block-image '>
					<img src={props.link} className='minicard-image'></img>
				</div>
				<div className='minicard-block-text'>
					<div className={'minicard-block-text-adjust' + props.color}>
						{props.heading}
					</div>
					<div className='minicard-block-desc'>
						<span className='minicard-block-desc-author'>{props.writer}</span>
						<span className='minicard-block-desc-time'>{props.time}</span>
					</div>
				</div>
			</div>
		</>
	);
};
