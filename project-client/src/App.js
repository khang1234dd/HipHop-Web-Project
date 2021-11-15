import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routers, RoutersAdmin } from './Routers';
import './Styles/globalstyle.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Routers></Routers>
			<ToastContainer></ToastContainer>

			<RoutersAdmin></RoutersAdmin>
		</>
	);
}

export default App;
