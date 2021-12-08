import { React, useState, useEffect } from 'react';

import { Wrapper } from '../../../Components/Wrapper';
import { ContainerTemplate } from '../../../Components/ContainerTemplate';
import { Heading } from '../../../Components/Heading';
import { Scroll } from '../../../Components/Scroll';

import './news.scss';

import { MdDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';
import {
	getHipHopMostViewedApi,
	getHipHopNowApi
} from '../../../Apis/article.api';
import { MiniCard } from '../../../Components/MiniCard';
import { Article } from '../../../Components/Article';
import { Loading } from '../../../Components/Loading';

const container = {
	show: {
		transition: {
			staggerChildren: 0.35
		}
	}
};

export const News = () => {
	const [HipHopNowPost, setHipHopNowPost] = useState([]);
	const [HipHopArticles, setHipHopArticles] = useState([]);
	const [pagination, setPagination] = useState({ _page: 1, _limit: 4 });
	const [filter, setFilter] = useState();
	const [done, setDone] = useState(undefined);
	const [loading, setLoading] = useState(undefined);

	const pageNumber = Math.ceil(pagination._total / pagination._limit);

	useEffect(() => {
		(async () => {
			const res = await getHipHopNowApi(pagination._page, pagination._limit);
			const res1 = await getHipHopMostViewedApi(1, 7);
			setHipHopArticles(res1.post);
			setPagination(res.pagination);
			setHipHopNowPost(HipHopNowPost.concat(res.post));
			setLoading(true);
			setTimeout(() => {
				setDone(true);
			}, 1000);
		})();
	}, [filter]);

	const showMoreItems = () => {
		setPagination({
			_page: pagination._page + 1,
			_limit: pagination._limit,
			_total: pagination._total
		});
		setFilter(pagination);
	};
	return (
		<>
			<Wrapper>
				{!done ? (
					<Loading loading={loading}></Loading>
				) : (
					<>
						<ContainerTemplate>
							<div className='news-leftcontainer'>
								<Heading name='hiphop ' desc='now'></Heading>
								<motion.div
									variants={container}
									initial='hidden'
									animate='show'
									exit='exit'>
									{HipHopNowPost.map((x, index) => {
										return <MiniCard data={x}></MiniCard>;
									})}
									{/* <MiniCardList data={articlecard}></MiniCardList> */}
								</motion.div>

								{pageNumber === pagination._page ? (
									<></>
								) : (
									<div
										onClick={showMoreItems}
										className='news-leftcontainer-link'>
										<p>Show more</p>
										<MdDoubleArrow></MdDoubleArrow>
									</div>
								)}
							</div>
							<div>
								<Heading name='hiphop ' desc='Article'></Heading>
								<ul className='articlelist-adjust'>
									{HipHopArticles.map((x, index) => {
										return (
											<li className='articlelist-adjust-block'>
												<Article data={x}></Article>
											</li>
										);
									})}
								</ul>
							</div>
						</ContainerTemplate>
					</>
				)}

				<Scroll showBelow={250} />
			</Wrapper>
		</>
	);
};
