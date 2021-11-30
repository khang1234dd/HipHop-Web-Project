import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../../Components/Navigation';
import { Wrapper } from '../../../Components/Wrapper';
import Container from '../../../Components/Container';

import { LargeCard } from '../../../Components/LargeCard';
import './main.scss';
import { Heading } from '../../../Components/Heading';
import { ArticleList } from '../../../Components/ArticleList';
import { SingleList } from '../../../Components/SingleList';
import { MiniCardList } from '../../../Components/MiniCardList';
import { Footer } from '../../../Components/Footer';

import { VideoList } from '../../../Components/VideoList';
import { MusicVideoCardList } from '../../../Components/MusicVideoList';
import { motion } from 'framer-motion';

const hero = [
	{
		color: '-color2',
		link: 'https://i.guim.co.uk/img/media/6e02742b13e16eb0ddef79b5ce5a3cd9a51230ca/0_117_3500_2100/master/3500.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=07dc0047b7b15fca77c98095bfac7488',
		heading:
			'Harris county judge Lina Hidalgo addresses the media on Saturday. Photograph: Daniel Kramer/Reuters',
		writer: 'kha zoo',
		time: 'November 8'
	},
	{
		color: '-color2',
		link: 'https://i.guim.co.uk/img/media/6e02742b13e16eb0ddef79b5ce5a3cd9a51230ca/0_117_3500_2100/master/3500.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=07dc0047b7b15fca77c98095bfac7488',
		heading:
			'Harris county judge Lina Hidalgo addresses the media on Saturday. Photograph: Daniel Kramer/Reuters',
		writer: 'kha zoo',
		time: 'November 8'
	},
	{
		color: '-color2',
		link: 'https://i.guim.co.uk/img/media/6e02742b13e16eb0ddef79b5ce5a3cd9a51230ca/0_117_3500_2100/master/3500.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=07dc0047b7b15fca77c98095bfac7488',
		heading:
			'Harris county judge Lina Hidalgo addresses the media on Saturday. Photograph: Daniel Kramer/Reuters',
		writer: 'kha zoo',
		time: 'November 8'
	}
];

const article = [
	{
		content:
			'Traviscot got many humiliating from his concert dsadssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertvdvcxzbczbvzbzdfgfdz'
	},
	{
		content:
			'Traviscot got many humiliating from his concertfdg gfdsssssgggfsdfgsd'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfsssssssssssssssssssssssssssg'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgffgssssssssssssssssssssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfsssssssssssssssssssssssssssssssssssss'
	},
	{
		content:
			'Traviscot got many humiliating from his concertgfssssssssssssssssssssssssssssssssssssssss'
	}
];

const single = [
	{
		content: 'back to home town',
		singer: 'sol 7'
	},
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' },
	{ content: 'back to home town', singer: 'sol 7' }
];

const articlecard = [
	{
		color: '',
		link: 'https://static.hiphopdx.com/2020/06/2020-06-04-yfn-lucci-900x506.jpg',
		heading: 'YFN LUCC IS MURDER + RACKETEERING CASE GETS COURT DATE',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '',
		link: 'https://static.hiphopdx.com/2020/11/201104-Erykah-Badu-900x506.jpg',
		heading:
			'ERYKAH BADU GETS GANGSTER ON FAN WHILE BLESSING TRAVIS SCOTT & ASTROWORLDS LOST SOULS',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '',
		link: 'https://static.hiphopdx.com/2021/10/211024-drake-getty-1200x675.jpeg',
		heading: 'TSU: DRAKE THANKED BY HOUSTON STRIPPERS FOR MILLION-DOLLAR NIGHT',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '',
		link: 'https://static.hiphopdx.com/2020/10/201009-Travis-Scott-900x506.jpg',
		heading:
			'TRAVIS SCOTTS EX-MANAGER CLAIMS HE LEFT HIM FOR DEAD WORST PERSON I WORKED WITH IN MY ENTIRE CAREER',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '',
		link: 'https://static.hiphopdx.com/2021/09/kanye-west-rushed-donda-to-drop-before-drake-certified-lover-boy-1200x675.png',
		heading:
			'KANYE WEST CALLS FOR AN END TO DRAKE BEEF WITH J PRINCE BY HIS SIDE',
		writer: 'kha zoo',
		time: 'nov 10'
	}
];

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

export const Main = () => {
	return (
		<>
			<Wrapper>
				<Navigation></Navigation>

				<Container>
					<motion.div
						variants={container}
						initial='hidden'
						animate='show'
						exit='exit'>
						<LargeCard data={hero}></LargeCard>
					</motion.div>
				</Container>
				<Container>
					<div className='mainpage-container'>
						<div className='mainpage-container-firstcontent'>
							<Heading name='News ' desc="Today's Article"></Heading>
							<div className='mainpage-container-firstcontent-block'>
								<ArticleList data={article}></ArticleList>
								<ArticleList data={article}></ArticleList>
							</div>
						</div>
						<div className='mainpage-container-secondarycontent'>
							<Heading name='HIP HOP ' desc='Single'></Heading>
							<SingleList data={single}></SingleList>
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
								<MiniCardList data={articlecard}></MiniCardList>
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
							<button className='mainpage-albumlist-button-previous'></button>
							<MusicVideoCardList data={albumlist}></MusicVideoCardList>
							<button className='mainpage-albumlist-button-next'></button>
						</div>
					</div>
				</Container>

				<Footer></Footer>
			</Wrapper>
		</>
	);
};
