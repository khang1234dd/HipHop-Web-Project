import { React, useState } from 'react';
import Container from '../../Components/Container';

import { Wrapper } from '../../Components/Wrapper';
import { HiCamera } from 'react-icons/hi';
import './userprofile.scss';
import ButtonHipHop from '../../Components/ButtonHipHop';
import { ContainerTemplate } from '../../Components/ContainerTemplate';
import { Link } from 'react-router-dom';
import { ModalUserProfile } from '../../Components/Modal/ModalUserProfile';
import { ModalUserAdd } from '../../Components/Modal/ModalUserAdd';

export const UserProfile = ({ ...data }) => {
	const [openModal, setOpenModal] = useState(false);
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [userArticles, setuserArticles] = useState([]);

	return (
		<>
			<Wrapper>
				<Container>
					<div className='userprofile-block'>
						<div className='userprofile-edit'>
							<div className='userprofile-edit-wrapper'>
								<button className='userprofile-edit-wrapper-button'>
									<div>
										<HiCamera></HiCamera>
									</div>
									Upload header image
								</button>
							</div>
						</div>
						<div className='userprofile-infor'>
							<div className='userprofile-infor-avatar'>
								<div className='userprofile-infor-avatar-edit'>
									<div className='userprofile-infor-avatar-edit-select'>
										<div className='userprofile-infor-avatar-edit-select-image'>
											<img
												src={data.user.image}
												width='200px'
												height='200px'
												className='userprofile-infor-avatar-edit-select-image-adjust'></img>
											<div className='userprofile-infor-avatar-edit-select-image-adjust-button'>
												<button className='userprofile-infor-avatar-edit-select-image-adjust-button-1'>
													<div>
														<HiCamera></HiCamera>
													</div>
													Upload image
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='userprofile-infor-content'>
								<h2 className='userprofile-infor-content-text'>
									{data.user.name}
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
								<li>Article</li>
								<li>Single</li>
								<li>MV</li>
							</ul>
						</div>
						<div className='userprofile-block-manage-button'>
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
						<div className='userprofile-main-lazyprofile'></div>
						<h3 className='userprofile-main-lazyprofile-header'>
							Seems a little quite over here
						</h3>
						<div className='userprofile-main-lazyprofile-link'>
							<Link to=''>
								Upload something to share it with your followers
							</Link>
						</div>
						<div className='userprofile-main-lazyprofile-link'>
							<ButtonHipHop name='Upload'></ButtonHipHop>
						</div>
					</div>
					<div className='userprofile-main-information'>
						<div className='userprofile-main-information-block'>
							<div className='userprofile-main-information-block-items'>
								<Link to=''>
									<h3>Followers</h3>
									<p>0</p>
								</Link>
							</div>
							<div className='userprofile-main-information-block-items'>
								<Link to=''>
									<h3>Followers</h3>
									<p>0</p>
								</Link>
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
			</Wrapper>

			{openModal && (
				<ModalUserProfile closeModal={setOpenModal}></ModalUserProfile>
			)}

			{openModalAdd && (
				<ModalUserAdd
					openModalAdd={openModalAdd}
					closeModalAdd={setOpenModalAdd}></ModalUserAdd>
			)}
		</>
	);
};
