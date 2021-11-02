import React from 'react';
import Button from '@mui/material/Button';
import SplitButton from '../SplitButton';
import './style.scss';
const test = ['Nhac hot 100', 'bang xep hang ', 'top rapper	'];
const NavigationBar = () => {
	return (
		<>
			<div className='navigationbar-container'>
				<div>
					<Button>Trang chủ</Button>
				</div>
				<div>
					<Button>Tin tức</Button>
				</div>
				<div>
					<SplitButton options={test}></SplitButton>
				</div>
				<div>
					<Button>Nhạc</Button>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
