import React, { useState, useEffect } from 'react';
import { Wrapper } from '../../Components/Wrapper';
import Container from '../../Components/Container';
import { Scroll } from '../../Components/Scroll';
import './watchvideos.scss';
import { YoutubeEmbed } from '../../Components/YoutubeEmbed';
import { MiniVideoCard } from '../../Components/MiniVideoCard';
import { Loading } from '../../Components/Loading';
import { useParams } from 'react-router-dom';
import {
	getMusicVideoByIdApi,
	getMusicVideoMostLikedApi
} from '../../Apis/musicvideo.api';

export const WatchVideos = () => {
	const { id } = useParams();
	const [MusicVideoById, setMusicVideoById] = useState([]);
	const [Top100MusicVideo, setTop100MusicVideo] = useState([]);
	const [Pagination, setPagination] = useState({ _page: 1, _limit: 4 });
	const [filter, setFilter] = useState();
	const [done, setDone] = useState(undefined);
	const [loading, setLoading] = useState(undefined);

	const pageNumber = Math.ceil(Pagination._total / Pagination._limit);
	useEffect(() => {
		(async () => {
			const res = await getMusicVideoMostLikedApi(
				Pagination._page,
				Pagination._limit
			);
			setTop100MusicVideo(Top100MusicVideo.concat(res.video));
			console.log(res, '94');
		})();
	}, [filter]);

	useEffect(() => {
		(async () => {
			const res = await getMusicVideoByIdApi(id);
			setMusicVideoById(res.video);
			setLoading(true);
			setTimeout(() => {
				setDone(true);
			}, 1000);
		})();
	}, [id]);

	const showMoreItems = () => {
		setPagination({
			_page: Pagination._page + 1,
			_limit: Pagination._limit,
			_total: Pagination._total
		});
		setFilter(Pagination);
	};
	return (
		<>
			<Wrapper>
				{!done ? (
					<Loading loading={loading}></Loading>
				) : (
					<>
						<Container>
							<div className='watchvideos-wrapper'>
								<div className='watchvideos-block'>
									{MusicVideoById ? (
										<YoutubeEmbed data={MusicVideoById}></YoutubeEmbed>
									) : (
										<></>
									)}
								</div>
								<div className='watchvideos-top100'>
									<div className='watchvideos-top100-header'>
										<h3>TOP 100</h3>
									</div>
									{Top100MusicVideo.map((x, index) => (
										<MiniVideoCard data={x}></MiniVideoCard>
									))}
									<div className='watchvideos-top100-button-block'>
										{pageNumber === Pagination._page ? (
											<></>
										) : (
											<button
												onClick={showMoreItems}
												className='watchvideos-top100-button-block-adjust'>
												<h3>See More</h3>
											</button>
										)}
									</div>
								</div>
							</div>
						</Container>
					</>
				)}

				<Scroll showBelow={250} />
			</Wrapper>
		</>
	);
};
