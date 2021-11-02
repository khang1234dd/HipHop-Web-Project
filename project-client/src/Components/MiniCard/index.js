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
					<div className=''>{props.heading}</div>
					<div>
						<span>1</span>
						<span>2</span>
					</div>
				</div>
			</div>
		</>
	);
};
