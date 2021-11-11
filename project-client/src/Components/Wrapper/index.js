import React from 'react';
import './style.scss';
export const Wrapper = props => {
	return (
		<>
			<div className='wrapper'>{props.children}</div>
		</>
	);
};
