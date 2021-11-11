import React from 'react';
import './style.scss';

export const Input = props => {
	return (
		<>
			<div className='input-block'>
				<div className='form-field'>
					<input
						name={props.name}
						type={props.type}
						className='form-input'
						placeholder=' '></input>
					<label for='' className='form-label'>
						{props.name}
					</label>
				</div>
			</div>
		</>
	);
};
