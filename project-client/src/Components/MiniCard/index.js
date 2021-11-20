import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const MiniCard = props => {
	return (
		<>
			<Link to=''>
				<div className='minicard-block'>
					<div className='minicard-block-image '>
						<img src={props.link} className='minicard-image'></img>
					</div>
					<div className='minicard-block-text'>
						<div className={props.className}>
							<div className={'minicard-block-text-adjust' + props.color}>
								{props.heading}
							</div>
						</div>
						<div className='minicard-block-desc'>
							<span className='minicard-block-desc-author'>{props.writer}</span>
							<span className='minicard-block-desc-time'>{props.time}</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};
