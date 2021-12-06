import React, { useState, useRef } from 'react';
import TimeSlider from 'react-input-slider';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { GrPause } from 'react-icons/gr';
import { GrPlay } from 'react-icons/gr';
import LoopIcon from '@mui/icons-material/Loop';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import './musicplayer.scss';

const MusicPlayer = ({ data }) => {
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(false);
	const [currentVolume, setcurrentVolume] = useState(50);

	const handleChangeVolume = (_, volume) => {
		audioRef.current.volume = volume / 100;
		setcurrentVolume(volume);
	};

	const handleLoadedData = () => {
		setDuration(audioRef.current.duration);
		if (isPlay) audioRef.current.play();
	};

	const handlePausePlayClick = () => {
		if (isPlay) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setPlay(!isPlay);
	};

	const handleTimeSliderChange = ({ x }) => {
		audioRef.current.currentTime = x;
		setCurrentTime(x);

		if (!isPlay) {
			setPlay(true);
			audioRef.current.play();
		}
	};

	return (
		<div className='musicplayer'>
			<div className='musicplayer-thumbnailblock'>
				{data.image !== '' && isPlay ? (
					<img
						className='musicplayer-SongThumbnail'
						src={data.image}
						alt='tet'
					/>
				) : data.image !== '' && !isPlay ? (
					<img
						className='musicplayer-SongThumbnailNoSpin'
						src={data.image}
						alt='tet'
					/>
				) : data.image === '' && isPlay ? (
					<img
						className='musicplayer-SongThumbnail'
						src='https://hiphop-g28.herokuapp.com/upload/image/1.png'
						alt='tet'
					/>
				) : (
					<img
						className='musicplayer-SongThumbnailNoSpin'
						src='https://hiphop-g28.herokuapp.com/upload/image/1.png'
						alt='tet'
					/>
				)}
				<span className='musicplayer-SongThumbnail-custom'></span>
			</div>

			<h2 className='musicplayer-SongTitle'>{data.name}</h2>
			<p className='musicplayer-Singer'>{data.ownersong}</p>
			<div className='musicplayer-ControlButtonGroup'>
				{/* <div className='musicplayer-PrevButton'></div> */}
				<div
					className='musicplayer-PausePlayButton'
					onClick={handlePausePlayClick}>
					{isPlay ? <GrPause /> : <GrPlay />}
				</div>
				{/* <div className='musicplayer-NextButton'>
					<LoopIcon sx={{ mt: '2px', w: '14px', h: '22px' }}></LoopIcon>
				</div> */}
			</div>
			<TimeSlider
				axis='x'
				xmax={duration}
				x={currentTime}
				onChange={handleTimeSliderChange}
				styles={{
					track: {
						backgroundColor: '#3fdad8',
						height: '2px'
					},
					active: {
						backgroundColor: '#3fdad8',
						height: '2px'
					},
					thumb: {
						marginTop: '-3px',
						width: '8px',
						height: '8px',
						backgroundColor: '#9b2335',
						borderRadius: 0
					}
				}}
			/>
			<audio
				ref={audioRef}
				src={data.link}
				onLoadedData={handleLoadedData}
				onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
				onEnded={() => setPlay(false)}
			/>

			<Stack
				spacing={2}
				direction='row'
				sx={{ mb: 1, w: 400, mt: 2 }}
				alignItems='center'>
				<VolumeDown sx={{ color: 'white' }} />
				{currentVolume === 25}
				<Slider
					aria-label='Volume'
					value={currentVolume}
					onChange={handleChangeVolume}
					valueLabelDisplay='auto'
					sx={{ color: '#3fdad8' }}
				/>
				<VolumeUp />
			</Stack>
		</div>
	);
};

export default MusicPlayer;
