import './youtubeembed.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export const YoutubeEmbed = ({ data }) => {
	return (
		<>
			<div className='youtubeembed-header'>
				<h2>{data.name}</h2>
				<mark>{data.ownervideo}</mark>
			</div>
			<div className='youtubeembed-wrapper'>
				<iframe
					width='100%'
					height='550'
					src={`https://www.youtube.com/embed/${data.link}?autoplay=1`}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					title='Embedded youtube'
				/>
				<div className='youtubeembed-infor'>
					<img
						alt=''
						src={data.image}
						className='youtubeembed-infor-image'></img>
					<div className='youtubeembed-infor-text'>
						<div className='youtubeembed-infor-text-date'>
							Publish on {data.createAt}
						</div>
						<div className='youtubeembed-infor-text-link'>
							by <Link to=''>{data.owner}</Link>
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
