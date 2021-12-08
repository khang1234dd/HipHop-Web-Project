// import { useEffect } from 'react';
import { useLocation } from 'react-router';

import React, { useEffect, useState } from 'react';

export const ScrollToTop = () => {
	const { pathName } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);
	return null;
};
