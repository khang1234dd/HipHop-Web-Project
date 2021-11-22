import './youtubeembed.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export const YoutubeEmbed = props => {
	return (
		<>
			<div className='youtubeembed-header'>
				<h2>{props.name}</h2>
				<mark>{props.singer}</mark>
			</div>
			<div className='youtubeembed-wrapper'>
				<iframe
					width='100%'
					height='600'
					src={`https://www.youtube.com/embed/${props.embedId}?autoplay=1`}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					title='Embedded youtube'
				/>
				<div className='youtubeembed-infor'>
					<img
						alt=''
						src={props.inforimage}
						className='youtubeembed-infor-image'></img>
					<div className='youtubeembed-infor-text'>
						<div className='youtubeembed-infor-text-date'>
							Publish on {props.date}
						</div>
						<div className='youtubeembed-infor-text-link'>
							by <Link to=''>{props.writer}</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// YoutubeEmbed.propTypes = {
// 	embedId: PropTypes.string.isRequired
// };
