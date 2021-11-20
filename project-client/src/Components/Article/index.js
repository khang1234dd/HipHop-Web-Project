import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
export const Article = props => {
	return (
		<>
			{/* <div className='article-sign'></div> */}
			<Link to=''>
				<div className='article-content'>{props.content}</div>
			</Link>
		</>
	);
};
