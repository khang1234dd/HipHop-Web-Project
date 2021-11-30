import React, { useState } from 'react';
import { Wrapper } from '../../../Components/Wrapper';
import Container from '../../../Components/Container';
import Navigation from '../../../Components/Navigation';
import NavigationBar from '../../../Components/NavigationBar';
import { MdDoubleArrow } from 'react-icons/md';
import { SingleCardList } from '../../../Components/SingleCardList';
import './single.scss';
import { MiniCardList } from '../../../Components/MiniCardList';
import { MiniCard } from '../../../Components/MiniCard';
import { AnimationOne } from '../../../Components/AnimationOne';
import { motion } from 'framer-motion';

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

const singlelist = [
	{
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading: 'YFN LUCC IS MURDER + RACKETEERING CASE GETS COURT DATE',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '-color2',
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		heading:
			'ERYKAH BADU GETS GANGSTER ON FAN WHILE BLESSING TRAVIS SCOTT & ASTROWORLDS LOST SOULS',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading: 'TSU: DRAKE THANKED BY HOUSTON STRIPPERS FOR MILLION-DOLLAR NIGHT',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '-color2',
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		heading:
			'TRAVIS SCOTTS EX-MANAGER CLAIMS HE LEFT HIM FOR DEAD WORST PERSON I WORKED WITH IN MY ENTIRE CAREER',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading:
			'KANYE WEST CALLS FOR AN END TO DRAKE BEEF WITH J PRINCE BY HIS SIDE',
		writer: 'kha zoo',
		time: 'nov 10'
	}
];
const data = [
	{
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		header: 'Venom '
	},
	{
		link: 'https://www.nme.com/wp-content/uploads/2019/06/Webp.net-resizeimage-2-5.jpg',
		header: 'River '
	},
	{
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		header: 'Easy on me'
	},
	{
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		header: 'Easy on me'
	},
	{
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		header: 'Easy on me'
	},
	{
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		header: 'Easy on me'
	}
];
export const Single = () => {
	const [items, setItems] = useState([singlelist]);
	const [visible, setVisible] = useState(3);

	const showMoreItems = () => {
		setVisible(prevValue => prevValue + 3);
	};

	return (
		<>
			{/* <AnimationOne> */}
			<Wrapper>
				<Container>
					<Navigation></Navigation>
				</Container>
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
							<SingleCardList data={data}></SingleCardList>
						</motion.div>
						<div className='single-top100'>
							<div className='single-top100-header'>
								<h3>TOP 100</h3>
							</div>
							<MiniCardList data={singlelist.slice(0, visible)}></MiniCardList>
							<div className='single-top100-button-block'>
								<button
									onClick={showMoreItems}
									className='single-top100-button-block-adjust'>
									<h3>See More</h3>
								</button>
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
			{/* </AnimationOne> */}
		</>
	);
};
