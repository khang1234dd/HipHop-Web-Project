import React from 'react';
import './style.scss';

export const MiniCard2 = props => {
	return (
		<>
			<div className='minicard2-block '>
				<div className='minicard2-block-image '>
					<img src={props.link} className='minicard2-image'></img>
				</div>
				<div className='minicard2-block-text'>
					<div className='minicard2-block-text-adjust'>{props.heading}</div>
					{/* <div className='minicard2-block-desc'>
						<span className='minicard2-block-desc-author'>{props.writer}</span>
						<span className='minicard2-block-desc-time'>{props.time}</span>
					</div> */}
				</div>
			</div>
		</>
	);
};
