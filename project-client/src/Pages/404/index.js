import React from 'react';
import './404.scss';
import Lottie from 'react-lottie'
import * as error from '../../Loading/84918-404-error-doodle-animation.json'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'
import {styled} from '@mui/material/styles'

const defaultOptions = {
	loop: true,
	autoplay: true, 
	animationData: error.default,
	rendererSettings: {
	  preserveAspectRatio: 'xMidYMid slice'
	}
  };
const StyleMain = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column'
})


export const Page404 = () => {
	const navigate = useNavigate();
	return (
	
	<StyleMain >
		<Lottie options={defaultOptions}
		height={500}
		width={1500} />
		<Button sx={{mt: '10px'}} onClick={()=>{navigate('/')}} variant="contained" color="secondary"> Back To Home </Button>
	</StyleMain>
	
	)
};
