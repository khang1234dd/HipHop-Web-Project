const getTopDayPostApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/post/getPostHipHopTopDay?_page=${page}&_limit=${limit}`,
		{
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};

const getHipHopNowApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/post/getPostHipHopNow?_page=${page}&_limit=${limit}`,
		{
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};
const getHipHopMostViewedApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/post/getPostHipHopMostViewed?_page=${page}&_limit=${limit}`,
		{
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};

const getPostByIdApi = async id => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/post/getPostPassAndPublicById/${id}`,
		{
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true'
			}
		}
	);
	return response.json();
};

export {
	getTopDayPostApi,
	getHipHopNowApi,
	getHipHopMostViewedApi,
	getPostByIdApi
};
