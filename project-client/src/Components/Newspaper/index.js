import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const Newspaper = props => {
	return (
		<>
			<div className='newspaper-large'>
				<img alt='' src={props.link} className='newspaper-block'></img>
			</div>
			<div className='newspaper-heading'>
				<h1 className='newspaper-heading-adjust'>{props.heading}</h1>
			</div>
			<div className='newspaper-infor'>
				<img
					alt=''
					src={props.inforimage}
					className='newspaper-infor-image'></img>
				<div className='newspaper-infor-text'>
					<div className='newspaper-infor-text-date'>
						Publish on {props.date}
					</div>
					<div className='newspaper-infor-text-link'>
						by <Link to=''>{props.writer}</Link>
					</div>
				</div>
			</div>
			<div className='newspaper-body'>
				<p>{props.content}</p>
			</div>
		</>
	);
};
