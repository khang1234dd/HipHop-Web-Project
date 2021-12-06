import React, { useEffect, useState } from 'react';
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
import { AudioPlayer } from '../Pages/AudioPlayer';
import { UserProfile } from '../Pages/UserProfile';
import { ModalUserProfile } from '../Components/Modal/ModalUserProfile';
import { AnimatePresence } from 'framer-motion';
import { authenticateApi } from '../Apis/auth.api';
import Cookies from 'js-cookie';
import Navigation from '../Components/Navigation';
import { Newspaper } from '../Components/Newspaper';
import { Page404 } from '../Pages/404';

export const Routers = () => {
	const [successlogin, setSuccessLogin] = useState(false);
	const [data, setData] = useState({});
	useEffect(() => {
		const cookies = Cookies.get('jwt');
		(async () => {
			if (cookies !== undefined) {
				const res = await authenticateApi();
				setData(res);
				console.log(data);
			}
		})();
	}, [successlogin]);

	return (
		<>
			<Router>
				<AnimatePresence>
					{!data.user || data.user === undefined ? (
						<>
							<Navigation {...data}></Navigation>
							<Routes>
								<Route path='/' element={<Main></Main>}></Route>
								<Route
									path='/signin'
									element={
										<SignIn
											success={successlogin}
											setSuccess={setSuccessLogin}></SignIn>
									}></Route>
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
								<Route
									path='/newspaper/:id'
									element={<Newspaper></Newspaper>}></Route>
								{/* <Route
						path='/albumarticle'
						element={<AlbumArticle></AlbumArticle>}></Route> */}
								<Route path='/single' element={<Single></Single>}></Route>
								<Route
									path='/musicvideo'
									element={<MusicVideo></MusicVideo>}></Route>
								<Route
									path='/watchvideos'
									element={<WatchVideos></WatchVideos>}></Route>
								<Route
									path='/audioplayer/:id'
									element={<AudioPlayer></AudioPlayer>}></Route>

								<Route path='/*' element={<Page404></Page404>}></Route>
							</Routes>
						</>
					) : data.user.role === 1 ? (
						<Routes>
							<Route
								path='/admin/*'
								element={<AdminRouters></AdminRouters>}></Route>
							<Route path='/*' element={<Page404></Page404>}></Route>
						</Routes>
					) : (
						<>
							<Navigation {...data}></Navigation>
							<Routes>
								<Route path='/' element={<Main></Main>}></Route>

								<Route
									path='/newpassword/:otp'
									element={<NewPassword></NewPassword>}></Route>

								<Route path='/news' element={<News></News>}></Route>
								<Route
									path='/newspaper/:id'
									element={<Newspaper></Newspaper>}></Route>

								<Route path='/single' element={<Single></Single>}></Route>
								<Route
									path='/musicvideo'
									element={<MusicVideo></MusicVideo>}></Route>
								<Route
									path='/watchvideos'
									element={<WatchVideos></WatchVideos>}></Route>
								<Route
									path='/audioplayer/:id'
									element={<AudioPlayer></AudioPlayer>}></Route>

								<Route
									path='/userprofile'
									element={<UserProfile {...data}></UserProfile>}></Route>

								<Route
									path='/modaluserprofile'
									element={<ModalUserProfile></ModalUserProfile>}></Route>
								<Route path='/*' element={<Page404></Page404>}></Route>
							</Routes>
						</>
					)}
				</AnimatePresence>
			</Router>
		</>
	);
};
