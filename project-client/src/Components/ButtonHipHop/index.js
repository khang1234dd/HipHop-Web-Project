import React from 'react';
import './style.scss';

export default function ButtonHipHop(props) {
	return (
		<>
			<div className='button-block'>
				<button className='button' onClick={props.onClick}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{props.name}
				</button>
			</div>
		</>
	);
}
