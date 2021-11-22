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
import AdminRouters from '../Pages/Admin/AdminRouters';
import { Articles } from '../Pages/Home/Articles';
import { Single } from '../Pages/Home/Single';
import { MusicVideo } from '../Pages/Home/MusicVideo';
import { WatchVideos } from '../Pages/WatchVideos';

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
					<Route
						path='/watchvideos'
						element={<WatchVideos></WatchVideos>}></Route>
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
					<Route
						path='/admin/:page'
						element={<AdminRouters></AdminRouters>}></Route>
				</Routes>
			</Router>
		</>
	);
};
