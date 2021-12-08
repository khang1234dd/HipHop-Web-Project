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
import { ScrollToTop } from '../Components/ScrollToTop';

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
				<ScrollToTop />
				<AnimatePresence>

			
							<Routes>
								
								<Route path='/' element={<><Navigation {...data}></Navigation><Main></Main></>}></Route>
								{data.user !== undefined  ?
								<>
								{data.user.role !==1 || data.user.role !==2 ?
								<>
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
								</>
								:<></>
								}
								</>
								: <>
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
								</>
								}
								<Route
									path='/newpassword/:otp'
									element={<NewPassword></NewPassword>}></Route>

								<Route path='/news' element={<><Navigation {...data}></Navigation><News></News></>}></Route>
								<Route
									path='/newspaper/:id'
									element={<><Navigation {...data}></Navigation><Newspaper></Newspaper></>}></Route>
								{/* <Route
						path='/albumarticle'
						element={<AlbumArticle></AlbumArticle>}></Route> */}
								<Route path='/single' element={<><Navigation {...data}></Navigation><Single></Single></>}></Route>
								<Route
									path='/musicvideo'
									element={<><Navigation {...data}></Navigation><MusicVideo></MusicVideo></>}></Route>
								<Route
									path='/watchvideos/:id'
									element={<><Navigation {...data}></Navigation><WatchVideos></WatchVideos></>}></Route>
								<Route
									path='/audioplayer/:id'
									element={<><Navigation {...data}></Navigation><AudioPlayer></AudioPlayer></>}></Route>
								{data.user !== undefined ?
									<>
									{ data.user.role >= 0?
									<>
									<Route
									path='/userprofile'
									element={<><Navigation {...data}></Navigation><UserProfile {...data}></UserProfile></>}></Route>

									<Route
									path='/modaluserprofile'
									element={<><Navigation {...data}></Navigation><ModalUserProfile></ModalUserProfile></>}></Route>

									</>
								: <></>
								}
								</>
								:<></>
								}

								{data.user !== undefined ?
									<>
									{ data.user.role ===1  || data.user.role===2?
									<>
									<Route
										path='/admin/*'
										element={<AdminRouters data={data.user}></AdminRouters>}></Route>
									
									</>
								: <></>
								}
								</>
								:<></>
								}
								<Route path='/*' element={<Page404></Page404>}></Route>
							</Routes>
				</AnimatePresence>
			</Router>
		</>
	);
};
