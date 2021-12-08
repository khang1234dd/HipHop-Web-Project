import { React, useEffect, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { getHipHopMostViewedApi, getPostByIdApi } from '../../Apis/article.api';
import Container from '../../Components/Container';
import { ContainerTemplate } from '../ContainerTemplate';
import { Heading } from '../Heading';
import { Article } from '../../Components/Article';
import { Scroll } from '../../Components/Scroll';
import { Loading } from '../../Components/Loading';
export const Newspaper = () => {
	const { id } = useParams();
	const [PostById, setPostById] = useState();
	const [HipHopArticles, setHipHopArticles] = useState([]);
	const [done, setDone] = useState(undefined);
	const [loading, setLoading] = useState(undefined);

	useEffect(() => {
		(async () => {
			const res = await getPostByIdApi(id);
			setPostById(res.post);
			setLoading(true);
			setTimeout(() => {
				setDone(true);
			}, 1000);
		})();
	}, [id]);

	useEffect(() => {
		(async () => {
			const res = await getHipHopMostViewedApi(1, 8);
			setHipHopArticles(res.post);
			// console.log(res, '26');
		})();
	}, []);

	function createMarkup() {
		return { __html: PostById.description };
	}

	return (
		<>
			{!done ? (
				<Loading loading={loading}></Loading>
			) : (
				<>
					{PostById ? (
						<>
							<Container>
								<ContainerTemplate>
									<div>
										<div className='newspaper-large'>
											{PostById.image !== 'upload/image/3.png' ? (
												<img
													alt=''
													src={PostById.image}
													className='newspaper-block'></img>
											) : (
												<img
													alt=''
													src={
														'https://hiphop-g28.herokuapp.com/' + PostById.image
													}
													className='newspaper-block'></img>
											)}
										</div>
										<div className='newspaper-heading'>
											<h1 className='newspaper-heading-adjust'>
												{PostById.name}
											</h1>
										</div>
										<div className='newspaper-infor'>
											{PostById.owner.image !== 'upload/image/1.png' ? (
												<img
													alt=''
													src={PostById.owner.image}
													className='newspaper-infor-image'></img>
											) : (
												<img
													alt=''
													src={
														'https://hiphop-g28.herokuapp.com/' +
														PostById.owner.image
													}
													className='newspaper-infor-image'></img>
											)}
											<div className='newspaper-infor-text'>
												<div className='newspaper-infor-text-date'>
													Publish on {PostById.createdAt}
												</div>
												<div className='newspaper-infor-text-link'>
													by <Link to=''>{PostById.owner.name}</Link>
												</div>
											</div>
										</div>
										<div className='newspaper-body'>
											<div dangerouslySetInnerHTML={createMarkup()} />
										</div>
									</div>
									<div>
										<Heading name='hiphop ' desc='article'></Heading>
										<ul className='newspaper-articles'>
											{HipHopArticles.map((x, index) => {
												return x && index !== 0 ? (
													<li className='newspaper-articles-block'>
														<Article data={x}></Article>
													</li>
												) : (
													<></>
												);
											})}
										</ul>
									</div>
								</ContainerTemplate>
								<Scroll showBelow={250} />
							</Container>
						</>
					) : (
						<></>
					)}
				</>
			)}
		</>
	);
};
