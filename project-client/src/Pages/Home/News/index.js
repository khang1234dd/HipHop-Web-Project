import React from 'react';
import Navigation from '../../../Components/Navigation';
import NavigationBar from '../../../Components/NavigationBar';
import { Wrapper } from '../../../Components/Wrapper';
import { ContainerTemplate } from '../../../Components/ContainerTemplate';
import { Heading } from '../../../Components/Heading';
import { MiniCardList } from '../../../Components/MiniCardList';
import { Link } from 'react-router-dom';
import './news.scss';
import { ArticleList } from '../../../Components/ArticleList';
import { MdDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';

const container = {
	show: {
		transition: {
			staggerChildren: 0.35
		}
	}
};

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

export const News = () => {
	return (
		<>
			<Wrapper>
				<Navigation></Navigation>

				<ContainerTemplate>
					<div className='news-leftcontainer'>
						<Heading name='hiphop ' desc='now'></Heading>
						<motion.div
							variants={container}
							initial='hidden'
							animate='show'
							exit='exit'>
							<MiniCardList data={articlecard}></MiniCardList>
						</motion.div>

						<Link to=''>
							<div className='news-leftcontainer-link'>
								<p>Next</p>
								<MdDoubleArrow></MdDoubleArrow>
							</div>
						</Link>
					</div>
					<div>
						<Heading name='hiphop ' desc='Article'></Heading>
						<ArticleList data={article}></ArticleList>
					</div>
				</ContainerTemplate>
			</Wrapper>
		</>
	);
};
