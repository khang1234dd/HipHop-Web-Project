import React from 'react';
import './style.scss';

export const Heading = props => {
	return (
		<>
			<div className='title'>
				<h1 className='title-name'>
					{props.name}
					<span className='title-desc'>{props.desc}</span>
				</h1>
			</div>
		</>
	);
};
