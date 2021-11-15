import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import iconsong from '../../images/iconsong.png';
import iconpost from '../../images/iconpost.png';
import iconuser from '../../images/iconuser.png';
import iconalbum from '../../images/iconalbum.png';

const CardHover = () => {
	return (
		<>
			<div className='container'>
				<div className='cards'>
					<div className='card card-one'>
						<img className='card-title' src={iconuser} alt='img' />
						<p className='date'>User</p>
						<p className='description'>1000</p>
					</div>

					<div className='card card-two'>
						<img className='card-title' src={iconalbum} alt='img' />
						<p className='date'>Album</p>
						<p className='description'>500</p>
					</div>

					<div className='card card-three'>
						<img className='card-title' src={iconsong} alt='img' />
						<p className='date'>Song</p>
						<p className='description'>200</p>
					</div>

					<div className='card card-four'>
						<img className='card-title' src={iconpost} alt='img' />
						<p className='date'>Post</p>
						<p className='description'>3000</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardHover;
