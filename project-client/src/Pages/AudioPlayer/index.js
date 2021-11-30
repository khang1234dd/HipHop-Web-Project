import React, { useState } from 'react';
import { Wrapper } from '../../Components/Wrapper';
import Container from '../../Components/Container';
import Navigation from '../../Components/Navigation';
import './audioplayer.scss';

import { MiniCardList } from '../../Components/MiniCardList';
import MusicPlayer from '../../Components/MusicPlayer';

const top100list = [
	{
		id: '1',
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading: 'YFN LUCC IS MURDER + RACKETEERING CASE GETS COURT DATE',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		id: '2',
		color: '-color2',
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		heading:
			'ERYKAH BADU GETS GANGSTER ON FAN WHILE BLESSING TRAVIS SCOTT & ASTROWORLDS LOST SOULS',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		id: '3',
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading: 'TSU: DRAKE THANKED BY HOUSTON STRIPPERS FOR MILLION-DOLLAR NIGHT',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		id: '4',
		color: '-color2',
		link: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/16/2537394811.jpg',
		heading:
			'TRAVIS SCOTTS EX-MANAGER CLAIMS HE LEFT HIM FOR DEAD WORST PERSON I WORKED WITH IN MY ENTIRE CAREER',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		id: '5',
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading:
			'KANYE WEST CALLS FOR AN END TO DRAKE BEEF WITH J PRINCE BY HIS SIDE',
		writer: 'kha zoo',
		time: 'nov 10'
	},
	{
		id: '6',
		color: '-color2',
		link: 'https://upload.wikimedia.org/wikipedia/vi/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
		heading:
			'KANYE WEST CALLS FOR AN END TO DRAKE BEEF WITH J PRINCE BY HIS SIDE',
		writer: 'kha zoo',
		time: 'nov 10'
	}
];

const audios = [
	{
		src: '',
		title: 'Xuân Ơi Ở Lại Chơi',
		artist: 'Tăng Nhật Tuệ - Hoàng Yến Chibi - Tino'
	},
	{
		src: '',
		title: 'Ngày Xuân Long Phụng Sum Vầy',
		artist: 'Bích Phương'
	},
	{
		src: '',
		title: 'Đoản Xuân Ca',
		artist: 'Bích Phương'
	}
];

export const AudioPlayer = () => {
	const [items, setItems] = useState([top100list]);
	const [visible, setVisible] = useState(3);

	const showMoreItems = () => {
		setVisible(prevValue => prevValue + 3);
	};
	return (
		<>
			<Wrapper>
				<Container>
					<Navigation></Navigation>
				</Container>
				<Container>
					<div className='audioplayer-wrapper'>
						<div className='audioplayer-block'>
							<MusicPlayer data={audios}></MusicPlayer>
						</div>
						<div className='audioplayer-top100'>
							<div className='audioplayer-top100-header'>
								<h3>TOP 100</h3>
							</div>
							<MiniCardList data={top100list.slice(0, visible)}></MiniCardList>
							<div className='audioplayer-top100-button-block'>
								<button
									onClick={showMoreItems}
									className='audioplayer-top100-button-block-adjust'>
									<h3>See More</h3>
								</button>
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
		</>
	);
};
