import React from 'react';
import './style.scss';

export const Heading = props => {
	return (
		<>
			<div className='heading-title'>
				<h1 className='heading-title-name'>
					{props.name}
					<span className='heading-title-desc'>{props.desc}</span>
				</h1>
			</div>
		</>
	);
};
