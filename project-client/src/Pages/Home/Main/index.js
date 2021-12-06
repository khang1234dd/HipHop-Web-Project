import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../Components/Wrapper';
import Container from '../../../Components/Container';
import { MusicList } from '../../../Components/MusicList';
import './main.scss';
import { Heading } from '../../../Components/Heading';

import { SingleList } from '../../../Components/SingleList';

import { Footer } from '../../../Components/Footer';
import { VideoList } from '../../../Components/VideoList';
import { MusicVideoCardList } from '../../../Components/MusicVideoList';
import { motion } from 'framer-motion';
import {
	getTopDayPostApi,
	getHipHopNowApi,
	getHipHopMostViewedApi
} from '../../../Apis/article.api';
import { MiniCard2 } from '../../../Components/MiniCard2';
import { MiniCardWhiteText } from '../../../Components/MiniCardWhiteText';
import { MiniCard } from '../../../Components/MiniCard';
import { Article } from '../../../Components/Article';
import { getMostLikedSongApi } from '../../../Apis/single.api';

const albumlist = [
	{
		link: 'https://hiphop-g28.herokuapp.com/upload/image/1.png',
		header: 'Adele 30 album'
	},
	{
		link: 'https://hiphop-g28.herokuapp.com/upload/image/1.png',
		header: 'Adele 30 album'
	},
	{
		link: 'https://hiphop-g28.herokuapp.com/upload/image/1.png',
		header: 'Adele 30 album'
	}
];

const videos = [
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'DONDA',
		singer: 'kha zoo'
	},
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'Con tim tao dau qua man',
		singer: 'kha zoo'
	},
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'DONDA',
		singer: 'kha zoo'
	},
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'Con tim tao dau qua man',
		singer: 'kha zoo'
	},
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'DONDA',
		singer: 'kha zoo'
	},
	{
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading: 'Con tim tao dau qua man',
		singer: 'kha zoo'
	}
];

//variants
const container = {
	show: {
		transition: {
			staggerChildren: 0.35
		}
	}
};

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

const letter = {
	initial: {
		y: 400
	},
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	}
};

export const Main = () => {
	const [TopDayPost, setTopDayPost] = useState([]);
	const [HipHopNowPost, setHipHopNowPost] = useState([]);
	const [HipHopMostViewed, setHipHopMostViewed] = useState([]);
	const [MostLikedSong, setMostLikedSong] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await getTopDayPostApi(1, 4);
			setTopDayPost(res.post);
			console.log(res, '124');
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const res = await getHipHopNowApi(1, 6);
			setHipHopNowPost(res.post);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const res = await getHipHopMostViewedApi(1, 12);
			setHipHopMostViewed(res.post);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const res = await getMostLikedSongApi(1, 7);
			setMostLikedSong(res.song);
		})();
	}, []);

	return (
		<>
			<Wrapper>
				<Container>
					<motion.div
						variants={container}
						initial='hidden'
						animate='show'
						exit='exit'>
						<div className='largecard-box '>
							<div className='largecard-container'>
								{TopDayPost.map((x, index) => {
									return x && index === 0 ? (
										<div className='largecard-container-main'>
											<MiniCard2 variants={item} data={x}></MiniCard2>
										</div>
									) : (
										<></>
									);
								})}
								<div>
									{TopDayPost.map((x, index) => {
										return x && index !== 0 ? (
											<div className='largecard-container-secondary'>
												<MiniCardWhiteText data={x}></MiniCardWhiteText>
											</div>
										) : (
											<></>
										);
									})}
								</div>
							</div>
						</div>
					</motion.div>
				</Container>
				<Container>
					<div className='mainpage-container'>
						<div className='mainpage-container-firstcontent'>
							<Heading name='News ' desc="Today's Article"></Heading>
							<div className='mainpage-container-firstcontent-block'>
								<motion.div
									variants={letter}
									initial='initial'
									animate='animate'>
									<ul className='articlelist-adjust'>
										{HipHopMostViewed.map((x, index) => {
											return x && index <= 5 && index >= 0 ? (
												<li className='articlelist-adjust-block'>
													<Article data={x}></Article>
												</li>
											) : (
												<></>
											);
										})}
									</ul>
								</motion.div>

								<motion.div
									variants={letter}
									initial='initial'
									animate='animate'>
									<ul className='articlelist-adjust'>
										{HipHopMostViewed.map((x, index) => {
											return x && index <= 12 && index >= 6 ? (
												<li className='articlelist-adjust-block'>
													<Article data={x}></Article>
												</li>
											) : (
												<></>
											);
										})}
									</ul>
								</motion.div>
							</div>
						</div>
						<div className='mainpage-container-secondarycontent'>
							<Heading name='HIP HOP ' desc='Single'></Heading>
							<ul className='singlelist'>
								{MostLikedSong.map((x, index) => {
									return x && index !== 0 ? (
										<motion.div
											variants={letter}
											initial='initial'
											animate='animate'>
											<li className='singlelist-block'>
												<MusicList data={x}></MusicList>
											</li>
										</motion.div>
									) : (
										<></>
									);
								})}
							</ul>
						</div>
					</div>
				</Container>

				<Container>
					<div className='mainpage-container'>
						<div className='mainpage-container-firstcontent'>
							<Heading name='HIPHOP ' desc='NOW'></Heading>
							<motion.div
								variants={container}
								initial='hidden'
								animate='show'
								exit='exit'>
								{HipHopNowPost.map((x, index) => {
									return x && index !== 0 ? (
										<MiniCard data={x}></MiniCard>
									) : (
										<></>
									);
								})}
							</motion.div>
						</div>
						<div className='mainpage-container-secondarycontent'>
							<Heading name='HIP HOP ' desc='VIDEOS'></Heading>
							<VideoList data={videos}></VideoList>
							<Link
								to='/musicvideo'
								className='mainpage-container-secondarycontent-link'>
								More videos
							</Link>
						</div>
					</div>
				</Container>

				<Container>
					<div className='mainpage-albumlist-block'>
						<div className='mainpage-albumlist-block-header'>
							<Heading desc='MUSIC VIDEO OF THE WEEK'></Heading>
						</div>
						<div className='mainpage-albumlist'>
							{/* <button className='mainpage-albumlist-button-previous'></button> */}
							<MusicVideoCardList data={albumlist}></MusicVideoCardList>
							{/* <button className='mainpage-albumlist-button-next'></button> */}
						</div>
					</div>
				</Container>

				<Footer></Footer>
			</Wrapper>
		</>
	);
};
