import React, { useEffect } from 'react';
import { Main } from '../Pages/Home/Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignIn } from '../Pages/Authentication/SignIn';
import { SignUp } from '../Pages/Authentication/SignUp';
import { ForgotPassword } from '../Pages/Authentication/ForgotPassword';
import { OTP } from '../Pages/Authentication/OTP';
import { OTPForgotPassword } from '../Pages/Authentication/OTPForgotPassword';
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
				</Routes>
			</Router>
		</>
	);
};
