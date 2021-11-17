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
			<div className='cards'>
				<div className="card">
          			<img src='http://hiphop-g28.herokuapp.com/upload/image/1.png' alt="img" />
          			<div className="card-body">
            			<h5>Nancy Wheeler</h5>
          			</div>
        		</div>

				
      		</div>  
		</>
	);
};

export default CardHover;
