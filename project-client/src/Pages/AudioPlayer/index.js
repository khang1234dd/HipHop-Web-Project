import { React, useState, useEffect } from 'react';
import { Wrapper } from '../../Components/Wrapper';
import Container from '../../Components/Container';
import Navigation from '../../Components/Navigation';
import './audioplayer.scss';
import { useParams } from 'react-router-dom';
import { MiniCardList } from '../../Components/MiniCardList';
import MusicPlayer from '../../Components/MusicPlayer';
import { getMostLikedSongApi, getSingleByIdApi } from '../../Apis/single.api';
import { MiniSongCard } from '../../Components/MiniSongCard';

export const AudioPlayer = () => {
	const { id } = useParams();
	console.log(id, '86');
	const [SingleById, setSingleById] = useState();
	const [MostLikedSong, setMostLikedSong] = useState([]);
	const [pagination, setPagination] = useState({ _page: 1, _limit: 5 });
	const [filterPagination, setfilterPagination] = useState();

	const pageNumber = Math.ceil(pagination._total / pagination._limit);

	useEffect(() => {
		(async () => {
			const res = await getSingleByIdApi(id);
			setSingleById(res.song);
		})();
	}, [id]);

	useEffect(() => {
		(async () => {
			const res = await getMostLikedSongApi(
				pagination._page,
				pagination._limit
			);
			setPagination(res.pagination);
			setMostLikedSong(MostLikedSong.concat(res.song));
			console.log(res, '29');
		})();
	}, [filterPagination]);

	const showMoreItems = () => {
		setPagination({
			_page: pagination._page + 1,
			_limit: pagination._limit,
			_total: pagination._total
		});
		setfilterPagination(pagination);
	};
	return (
		<>
			<Wrapper>
				<Container>
					<div className='audioplayer-wrapper'>
						<div className='audioplayer-block'>
							{SingleById ? (
								<MusicPlayer data={SingleById}></MusicPlayer>
							) : (
								<></>
							)}
						</div>
						<div className='audioplayer-top100'>
							<div className='audioplayer-top100-header'>
								<h3>TOP 100</h3>
							</div>
							{/* <MiniCardList data={top100list.slice(0, visible)}></MiniCardList> */}

							{MostLikedSong.map((x, index) => {
								return <MiniSongCard data={x}></MiniSongCard>;
							})}
							<div className='audioplayer-top100-button-block'>
								{pageNumber === pagination._page ? (
									<></>
								) : (
									<button
										onClick={showMoreItems}
										className='audioplayer-top100-button-block-adjust'>
										<h3>See More</h3>
									</button>
								)}
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
		</>
	);
};
