import React from 'react';
import { Article } from '../Article';
import './style.scss';

export const ArticleList = props => {
	return (
		<>
			<ul className='articlelist-adjust'>
				{props.data.map(x => (
					<li className='articlelist-adjust-block'>
						<Article content={x.content}></Article>
					</li>
				))}
			</ul>
		</>
	);
};
