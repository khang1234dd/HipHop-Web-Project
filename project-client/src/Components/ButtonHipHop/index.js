import React from 'react';
import './style.scss';

export default function ButtonHipHop(props) {
	return (
		<>
			<button className='button' onClick={props.onClick}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				{props.name}
			</button>
		</>
	);
}
