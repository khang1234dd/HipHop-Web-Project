import React, { useState, useEffect } from 'react';
import { Wrapper } from '../../../Components/Wrapper';
import Container from '../../../Components/Container';
import {
	getMostLikedSongApi,
	getSingleTopDayApi
} from '../../../Apis/single.api';
import SingleCard from '../../../Components/SingleCard';
import './single.scss';

import { motion } from 'framer-motion';
import { MiniSongCard } from '../../../Components/MiniSongCard';

const item = {
	hidden: {
		opacity: 0,
		y: 200
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: { ease: 'easeInOut', duration: 0.8 }
	}
};

//variants
const container = {
	show: {
		transition: {
			staggerChildren: 0.35
		}
	}
};

const letter = {
	initial: {
		y: 800
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	}
};

export const Single = () => {
	const [SingleTopDay, setSingleTopDay] = useState([]);
	const [MostLikedSong, setMostLikedSong] = useState([]);
	const [pagination, setPagination] = useState({ _page: 1, _limit: 5 });
	const [filter, setFilter] = useState();

	const pageNumber = Math.ceil(pagination._total / pagination._limit);

	useEffect(() => {
		(async () => {
			const res = await getSingleTopDayApi(1, 6);
			setSingleTopDay(res.song);
			console.log(res, '65');
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const res = await getMostLikedSongApi(
				pagination._page,
				pagination._limit
			);
			setPagination(res.pagination);
			setMostLikedSong(MostLikedSong.concat(res.song));
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
			{/* <AnimationOne> */}
			<Wrapper>
				<Container>
					<div className='single-wrapper'>
						<motion.div
							variants={letter}
							animate='animate'
							initial='initial'
							className='single-header'>
							<h2>
								Single <mark>Of the week</mark>
							</h2>
						</motion.div>
						<motion.div
							variants={container}
							initial='hidden'
							animate='show'
							exit='exit'
							className='single-block'>
							{SingleTopDay.map((x, index) => (
								<SingleCard data={x}></SingleCard>
							))}
							{/* <SingleCardList data={data}></SingleCardList> */}
						</motion.div>
						<div className='single-top100'>
							<div className='single-top100-header'>
								<h3>TOP 100</h3>
							</div>
							{MostLikedSong.map((x, index) => {
								return <MiniSongCard data={x}></MiniSongCard>;
							})}
							<div className='single-top100-button-block'>
								{pageNumber === pagination._page ? (
									<></>
								) : (
									<button
										onClick={showMoreItems}
										className='single-top100-button-block-adjust'>
										<h3>See More</h3>
									</button>
								)}
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
			{/* </AnimationOne> */}
		</>
	);
};
