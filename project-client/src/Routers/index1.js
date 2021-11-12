import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PostCard} from '../Components/PostCard';

export const RoutersAdmin = () => {
    return (
        <Router>
			<Routes>
				<Route path='/postcard' element={<PostCard></PostCard>}></Route>
			</Routes>
		</Router>
    )
}


