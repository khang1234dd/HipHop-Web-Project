import React, { useState, useRef } from 'react';
import TimeSlider from 'react-input-slider';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { GrPause } from 'react-icons/gr';
import { GrPlay } from 'react-icons/gr';
import './musicplayer.scss';

const MusicPlayer = props => {
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(false);

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
				<img
					className='musicplayer-SongThumbnail'
					src='https://img.wattpad.com/e730b0898d0418b446135de802256129da9d2169/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f563157715f33666a33382d6c57673d3d2d3538313835373338362e313533333732643430383662613536663633363331303039383132382e6a7067'
					alt='tet'
				/>
				<span className='musicplayer-SongThumbnail-custom'></span>
			</div>

			<h2 className='musicplayer-SongTitle'>{props.data[audioIndex].title}</h2>
			<p className='musicplayer-Singer'>{props.data[audioIndex].artist}</p>
			<div className='musicplayer-ControlButtonGroup'>
				<div
					className='musicplayer-PrevButton'
					onClick={() => setAudioIndex((audioIndex - 1) % props.data.length)}>
					<GrPrevious />
				</div>
				<div
					className='musicplayer-PausePlayButton'
					onClick={handlePausePlayClick}>
					{isPlay ? <GrPause /> : <GrPlay />}
				</div>
				<div
					className='musicplayer-NextButton'
					onClick={() => setAudioIndex((audioIndex + 1) % props.data.length)}>
					<GrNext />
				</div>
			</div>
			<TimeSlider
				axis='x'
				xmax={duration}
				x={currentTime}
				onChange={handleTimeSliderChange}
				styles={{
					track: {
						backgroundColor: '#9b2335',
						height: '2px'
					},
					active: {
						backgroundColor: '#9b2335',
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
				src={props.data[audioIndex].src}
				onLoadedData={handleLoadedData}
				onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
				onEnded={() => setPlay(false)}
			/>
		</div>
	);
};

export default MusicPlayer;
