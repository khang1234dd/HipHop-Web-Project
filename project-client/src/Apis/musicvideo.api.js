const getMusicVideoMostLikedApi = async (page, limit) => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/videomusic/getVideoMusicMostLike?_page=${page}&_limit=${limit}`,
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

const getMusicVideoByIdApi = async id => {
	const response = await fetch(
		`https://hiphop-g28.herokuapp.com/videomusic/getVideoMusicPublicById/${id}`,
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

export { getMusicVideoMostLikedApi, getMusicVideoByIdApi };
