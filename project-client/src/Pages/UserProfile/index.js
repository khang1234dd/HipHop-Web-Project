import { React, useState, useEffect } from 'react';
import Container from '../../Components/Container';
import { Scroll } from '../../Components/Scroll';
import { Wrapper } from '../../Components/Wrapper';
import { HiCamera } from 'react-icons/hi';
import './userprofile.scss';
import ButtonHipHop from '../../Components/ButtonHipHop';
import { ContainerTemplate } from '../../Components/ContainerTemplate';
import { Link } from 'react-router-dom';
import { ModalUserProfile } from '../../Components/Modal/ModalUserProfile';
import { ModalUserAdd } from '../../Components/Modal/ModalUserAdd';
import { ModalUserImage } from '../../Components/Modal/ModalUserImage';
import { authenticateApi } from '../../Apis/auth.api';
import { ModalUserChangePassWord } from '../../Components/Modal/ModalUserChangePassWord';
import { MiniCardUser } from '../../Components/MiniCardUser';
import { Loading } from '../../Components/Loading';

export const UserProfile = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [openModalImage, setOpenModalImage] = useState(false);
	const [openModalChangePassWord, setOpenModalChangePassWord] = useState(false);
	const [userArticles, setuserArticles] = useState([]);
	const [user, setUser] = useState([]);
	const [userPost, setUserPost] = useState([]);
	const [done, setDone] = useState(undefined);
	const [loading, setLoading] = useState(undefined);

	useEffect(() => {
		(async () => {
			const res = await authenticateApi();
			setUser(res.user);
			setUserPost(res.user.post);
			setLoading(true);
			setTimeout(() => {
				setDone(true);
			}, 1000);
			console.log(res, '24');
		})();
	}, []);

	return (
		<>
			<Wrapper>
				{!done ? (
					<Loading loading={loading}></Loading>
				) : (
					<>
						<Container>
							<div className='userprofile-block'>
								<div className='userprofile-edit'>
									<div className='userprofile-edit-wrapper'>
										{/* <button className='userprofile-edit-wrapper-button'>
									<div>
										<HiCamera></HiCamera>
									</div>
									Upload header image
								</button> */}
									</div>
								</div>
								<div className='userprofile-infor'>
									<div className='userprofile-infor-avatar'>
										<div className='userprofile-infor-avatar-edit'>
											<div className='userprofile-infor-avatar-edit-select'>
												<div className='userprofile-infor-avatar-edit-select-image'>
													<img
														src={user.image}
														width='200px'
														height='200px'
														className='userprofile-infor-avatar-edit-select-image-adjust'></img>
													<div className='userprofile-infor-avatar-edit-select-image-adjust-button'>
														<button
															onClick={() => {
																setOpenModalImage(true);
															}}
															className='userprofile-infor-avatar-edit-select-image-adjust-button-1'>
															<div>
																<HiCamera></HiCamera>
															</div>
															Upload image
															{/* <input className='input' type='file'></input> */}
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='userprofile-infor-content'>
										<h2 className='userprofile-infor-content-text'>
											{user.name}
										</h2>
									</div>
								</div>
							</div>
						</Container>

						<Container>
							<div className='userprofile-block-manage'>
								<div className='userprofile-block-manage-stuffs'>
									<ul>
										<li>All</li>
									</ul>
								</div>
								<div className='userprofile-block-manage-button'>
									<ButtonHipHop
										name='Change Password'
										onClick={() => {
											setOpenModalChangePassWord(true);
										}}></ButtonHipHop>
									<ButtonHipHop
										name='Edit'
										onClick={() => {
											setOpenModal(true);
										}}></ButtonHipHop>
									<ButtonHipHop
										onClick={() => {
											setOpenModalAdd(true);
										}}
										name='Add'></ButtonHipHop>
								</div>
							</div>
						</Container>
						<ContainerTemplate>
							<div className='userprofile-main'>
								{userPost.length > 0 ? (
									userPost.map((x, index) => {
										return <MiniCardUser data={x}></MiniCardUser>;
									})
								) : (
									<>
										<div className='userprofile-main-lazyprofile'></div>
										<h3 className='userprofile-main-lazyprofile-header'>
											Seems a little quite over here
										</h3>
										<div className='userprofile-main-lazyprofile-link'>
											<p>Upload something to share it with your followers</p>
										</div>
										<div className='userprofile-main-lazyprofile-link'>
											<ButtonHipHop name='Upload'></ButtonHipHop>
										</div>
									</>
								)}
							</div>
							<div className='userprofile-main-information'>
								<div className='userprofile-main-information-block'>
									<div className='userprofile-main-information-block-items'>
										<Link to=''>
											<h3>Followers</h3>
										</Link>
										<p>0</p>
									</div>
									<div className='userprofile-main-information-block-items'>
										<Link to=''>
											<h3>Followers</h3>
										</Link>
										<p>0</p>
									</div>
									{/* <div className='userprofile-main-information-block-items'>
								<Link to=''>
									<h3>Followers</h3>
									<p>0</p>
								</Link>
							</div> */}
								</div>
							</div>
						</ContainerTemplate>
					</>
				)}

				<Scroll showBelow={250} />
			</Wrapper>

			{openModal && (
				<ModalUserProfile
					data={user}
					closeModal={setOpenModal}></ModalUserProfile>
			)}

			{openModalAdd && (
				<ModalUserAdd
					data={user}
					openModalAdd={openModalAdd}
					closeModalAdd={setOpenModalAdd}></ModalUserAdd>
			)}

			{openModalImage && (
				<ModalUserImage
					data={user}
					closeModal={setOpenModalImage}></ModalUserImage>
			)}

			{openModalChangePassWord && (
				<ModalUserChangePassWord
					data={user}
					closeModal={setOpenModalChangePassWord}></ModalUserChangePassWord>
			)}
		</>
	);
};
