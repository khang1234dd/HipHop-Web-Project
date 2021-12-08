import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../Loading/loading.json';
import * as done from '../../Loading/done.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: loading.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const defaultOptions2 = {
	loop: false,
	autoplay: true,
	animationData: done.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export const Loading = ({ loading }) => {
	return (
		<div style={{ marginTop: '10rem' }}>
			{!loading ? (
				<Lottie options={defaultOptions} height={120} width={120} />
			) : (
				<Lottie options={defaultOptions2} height={120} width={120} />
			)}
		</div>
	);
};
