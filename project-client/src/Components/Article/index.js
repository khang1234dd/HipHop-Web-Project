import React from 'react';
import './style.scss';
export const Article = props => {
	return (
		<>
			{/* <div className='article-sign'></div> */}
			<div className='article-content'>{props.content}</div>
		</>
	);
};
