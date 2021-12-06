const getMostLikedSongApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/song/getSongMostLike?_page=${page}&_limit=${limit}`,
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

const getSingleByIdApi = async id => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/song/getSongPublicById/${id}`,
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

const getSingleTopDayApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/song/getSongTopDay?_page=${page}&_limit=${limit}`,
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

export { getMostLikedSongApi, getSingleByIdApi, getSingleTopDayApi };
