import React, { useState, useEffect } from 'react';
import { Wrapper } from '../../../Components/Wrapper';
import Container from '../../../Components/Container';
import { Scroll } from '../../../Components/Scroll';
import './musicvideo.scss';
import { MiniVideoCard } from '../../../Components/MiniVideoCard';
import { getMusicVideoMostLikedApi } from '../../../Apis/musicvideo.api';
import MusicVideoCard from '../../../Components/MusicVideoCard';
import { Loading } from '../../../Components/Loading';

export const MusicVideo = () => {
	const [MostLikedMusicVideo, setMostLikedMusicVideo] = useState([]);
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
			const res1 = await getMusicVideoMostLikedApi(1, 6);
			setMostLikedMusicVideo(res1.video);
			setTop100MusicVideo(Top100MusicVideo.concat(res.video));

			setLoading(true);
			setTimeout(() => {
				setDone(true);
			}, 1000);
			console.log(res, '94');
		})();
	}, [filter]);

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
							<div className='musicvideocardlist-wrapper'>
								<div className='musicvideocardlist-header'>
									<h2>
										MUSIC VIDEO <mark>Of the week</mark>
									</h2>
								</div>
								<div className='musicvideocardlist-block'>
									{MostLikedMusicVideo.map((x, index) => (
										<MusicVideoCard data={x}></MusicVideoCard>
									))}
								</div>
								<div className='musicvideocardlist-top100'>
									<div className='musicvideocardlist-top100-header'>
										<h3>TOP 100</h3>
									</div>
									{Top100MusicVideo.map((x, index) => (
										<MiniVideoCard data={x}></MiniVideoCard>
									))}
									<div className='musicvideocardlist-top100-button-block'>
										{pageNumber === Pagination._page ? (
											<></>
										) : (
											<button
												onClick={showMoreItems}
												className='musicvideocardlist-top100-button-block-adjust'>
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
