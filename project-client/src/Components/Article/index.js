import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
export const Article = ({ data }) => {
	return (
		<>
			{/* <div className='article-sign'></div> */}
			<Link to={`/newspaper/${data._id}`}>
				<div className='article-content'>{data.name}</div>
			</Link>
		</>
	);
};
