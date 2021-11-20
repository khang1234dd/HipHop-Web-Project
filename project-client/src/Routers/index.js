import React, { useEffect } from 'react';
import { Main } from '../Pages/Home/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from '../Pages/Authentication/SignIn';
import { SignUp } from '../Pages/Authentication/SignUp';
import { ForgotPassword } from '../Pages/Authentication/ForgotPassword';
import { OTP } from '../Pages/Authentication/OTP';
import { OTPForgotPassword } from '../Pages/Authentication/OTPForgotPassword';
import { NewPassword } from '../Pages/Authentication/NewPassword';
import { News } from '../Pages/Home/News';
import { PostCard } from '../Components/PostCard';
import { VideoCard } from '../Components/VideoCard';
import NavigationAdmin from '../Components/NavigationAdmin';
import NavigationAdminTop from '../Components/NavigationAdminTop';
<<<<<<< Updated upstream
import Navigation from '../Components/Navigation';
import AdminRouters from '../Pages/Admin/AdminRouters';
=======

import Dashboard from '../Pages/Admin/Dashboard';
>>>>>>> Stashed changes
import Card3D from '../Components/Card3D';
import CardHover from '../Components/CardHover';
import AlbumType2 from '../Components/AlbumType2';
import Carousel from '../Components/Carousel';

import { Articles } from '../Pages/Home/Articles';
import CardHoverType2 from '../Components/CardHoverType2';
import TablePost from '../Components/Admin/Common/TablePost';

import { Single } from '../Pages/Home/Single';
import { MusicVideo } from '../Pages/Home/MusicVideo';

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
					<Route path='/' element={<Main></Main>}></Route>
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
						path='/newpassword/:otp'
						element={<NewPassword></NewPassword>}></Route>

					<Route path='/news' element={<News></News>}></Route>
					<Route path='/newspaper' element={<Articles></Articles>}></Route>
					{/* <Route
						path='/albumarticle'
						element={<AlbumArticle></AlbumArticle>}></Route> */}
					<Route path='/single' element={<Single></Single>}></Route>
					<Route path='/musicvideo' element={<MusicVideo></MusicVideo>}></Route>
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
<<<<<<< Updated upstream
					<Route path='/admin/:page' element={<AdminRouters></AdminRouters>}></Route>

=======
					<Route path='/postcard' element={<PostCard></PostCard>}></Route>
					<Route path='/videocard' element={<VideoCard></VideoCard>}></Route>
					<Route
						path='/navigationadmin'
						element={<NavigationAdmin></NavigationAdmin>}></Route>
					<Route
						path='/navigationadmintop'
						element={<NavigationAdminTop></NavigationAdminTop>}></Route>
					<Route path='/card3d' element={<Card3D></Card3D>}></Route>
					<Route path='/cardhover' element={<CardHover></CardHover>}></Route>
					<Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
					<Route path='/albumtype2' element={<AlbumType2></AlbumType2>}></Route>
					<Route path='/carousel' element={<Carousel></Carousel>}></Route>
>>>>>>> Stashed changes
				</Routes>
			</Router>
		</>
	);
};
