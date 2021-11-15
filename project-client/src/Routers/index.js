import React, { useEffect } from 'react';
import { Main } from '../Pages/Home/Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignIn } from '../Pages/Authentication/SignIn';
import { SignUp } from '../Pages/Authentication/SignUp';
import { ForgotPassword } from '../Pages/Authentication/ForgotPassword';
import { OTP } from '../Pages/Authentication/OTP';
import { OTPForgotPassword } from '../Pages/Authentication/OTPForgotPassword';
import { NewPassword } from '../Pages/Authentication/NewPassword';

import { PostCard } from '../Components/PostCard';
import { VideoCard } from '../Components/VideoCard';
import NavigationAdmin from '../Components/NavigationAdmin';
import NavigationAdminTop from '../Components/NavigationAdminTop.js';
import Navigation from '../Components/Navigation';
import Card3D from '../Components/Card3D';
import CardHover from '../Components/CardHover';
import { authenticateApi } from '../Apis/auth.api';
import Cookies from 'js-cookie';

export const Routers = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		const res = await authenticateApi();
	// 		console.log(res);
	// 	})();
	// }, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path='/main' element={<Main></Main>}></Route>
					<Route path='/signin' element={<SignIn></SignIn>}></Route>
					<Route path='/signup' element={<SignUp></SignUp>}></Route>
					<Route
						path='/forgotpassword'
						element={<ForgotPassword></ForgotPassword>}></Route>
					<Route path='/otp' element={<OTP></OTP>}></Route>
					<Route
						path='/otpforgotpassword'
						element={<OTPForgotPassword></OTPForgotPassword>}></Route>
					<Route
						path='/newpassword'
						element={<NewPassword></NewPassword>}></Route>
				</Routes>
			</Router>
		</>
	);
};

export const RoutersAdmin = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		const res = await authenticateApi();
	// 		console.log(res);
	// 	})();
	// }, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path='/postcard' element={<PostCard></PostCard>}></Route>
					<Route path='/videocard' element={<VideoCard></VideoCard>}></Route>
					<Route
						path='/navigationadmin'
						element={<NavigationAdmin></NavigationAdmin>}></Route>
					<Route path='/navigation' element={<Navigation></Navigation>}></Route>
					<Route
						path='/navigationadmintop'
						element={<NavigationAdminTop></NavigationAdminTop>}></Route>
					<Route path='/card3d' element={<Card3D></Card3D>}></Route>
					<Route path='/cardhover' element={<CardHover></CardHover>}></Route>
				</Routes>
			</Router>
		</>
	);
};
