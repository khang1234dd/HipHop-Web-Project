import { React, useState, useEffect } from 'react';
import './style.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Input } from '../../Input';
import { Modal, Select } from '@mui/material';
import ButtonHipHop from '../../ButtonHipHop';
import { Box } from '@mui/system';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import validate from './validate';
import { getCategoryApi, createPostApi } from '../../../Apis/user.api';
import toastNotify from '../../Toast';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 850,
	bgcolor: 'white',
	border: '1px solid var(--background-highlight-color)',
	boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
	p: 5,
	height: 'auto'
};

export const ModalUserAdd = ({ closeModalAdd, openModalAdd }) => {
	const [category, setCategory] = useState('');
	const [selectedImage, setSelectedImage] = useState();
	const [convertedContent, setConvertedContent] = useState('');
	const [editor, setEditor] = useState(EditorState.createEmpty());
	const [categoryArray, setCategoryArray] = useState([]);
	const handleEditorChange = state => {
		setEditor(state);
		convertContentToHTML();
	};
	const convertContentToHTML = () => {
		let currentContentAsHTML = convertToHTML(editor.getCurrentContent());
		setConvertedContent(currentContentAsHTML);
	};

	const handleChange = event => {
		setCategory(event.target.value);
		console.log(event.target.value);
	};

	// This function will be triggered when the file field change
	const imageChange = e => {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedImage(e.target.files[0]);
		}
	};
	const removeSelectedImage = () => {
		setSelectedImage();
	};

	useEffect(() => {
		(async () => {
			const res = await getCategoryApi();
			setCategoryArray(res.category);
			console.log(categoryArray);
		})();
	}, []);

	const createArticle = async e => {
		e.preventDefault();
		const namePost = e.target.Postname.value;
		const image = e.target.image.files[0];
		const tinydes = e.target.Tinydescription.value;
		const description = convertedContent.toString();
		const categoryId = e.target.category.value.toString();
		console.log(namePost, tinydes, image, description, categoryId);
		const isvaliddata = validate(
			namePost,
			categoryId,
			tinydes,
			image,
			description
		);
		if (isvaliddata) {
			const formData = new FormData();
			formData.append('namePost', namePost);
			formData.append('categoryId', categoryId);
			formData.append('tinydes', tinydes);
			formData.append('image', image);
			formData.append('description', description);
			const res = await createPostApi(formData);
			if (res.success) {
				toastNotify(
					'Post was sent to Administrator , Please wait for Acception',
					'warn'
				);
			} else toastNotify(res.message, 'error');
		}
	};

	return (
		<>
			<Modal open={openModalAdd} onClose={closeModalAdd}>
				<Box onSubmit={createArticle} component='form' sx={style}>
					<div className='modaluseradd-content'>
						<div className='modaluseradd-profilesetting'>
							<h2 className='modaluseradd-title'>Adding something news</h2>
							<div className='modaluseradd-profilesetting-form'>
								<div className='modaluseradd-profilesetting-form-block'>
									<div className='modaluseradd-profilesetting-form-block-content'>
										<div className='modaluseradd-profilesetting-form-block-content-displayname'>
											<p>Post Header</p>
											<Input type='text' name='Postname'></Input>
										</div>
										<div className='modaluseradd-profilesetting-form-block-content-category'>
											<p>Post Category</p>
											<FormControl fullWidth>
												<InputLabel id='demo-simple-select-label'>
													Category
												</InputLabel>
												<Select
													name='category'
													labelId='demo-simple-select-label'
													id='demo-simple-select'
													value={category}
													label='Category'
													onChange={handleChange}>
													{categoryArray.map((x, index) => {
														return (
															<MenuItem key={index.toString()} value={x._id}>
																{x.name}
															</MenuItem>
														);
													})}
												</Select>
											</FormControl>
										</div>

										<div className='modaluseradd-profilesetting-form-block-content-thumbnaildesc'>
											<p>Thumbnail Description</p>
											<Input type='text' name='Tinydescription'></Input>
										</div>
										<div className='modaluseradd-profilesetting-form-block-content-uploadimage'>
											<div className='modaluseradd-profilesetting-form-block-image'>
												<p>Choose Thumbnail</p>
												{selectedImage && (
													<img
														alt='Thumb'
														src={URL.createObjectURL(selectedImage)}
														width='260px'
														height='100px'
														className='modaluseradd-profilesetting-form-block-image-adjust'></img>
												)}
											</div>

											<input
												name='image'
												onChange={imageChange}
												className='modaluseradd-profilesetting-form-block-image-button'
												type='file'></input>
										</div>
										<div className='modaluseradd-profilesetting-form-block-content-bio'>
											<p>Content</p>
											<Editor
												editorState={editor}
												// wrapperClassName={styles.editorWarp}
												// editorClassName={styles.editorEditorStyle}
												editorStyle={{
													border: '1px solid #9B2335',
													overflow: 'auto',
													height: '150px',
													width: '100%'
												}}
												toolbarStyle={{ border: '1px solid #9B2335' }}
												toolbar={{
													inline: { inDropdown: true },
													list: { inDropdown: true },
													textAlign: { inDropdown: true },
													link: { inDropdown: true },
													history: { inDropdown: true },
													image: { alt: { present: true, mandatory: true } }
												}}
												onEditorStateChange={handleEditorChange}
											/>
										</div>
									</div>
								</div>
								<div className='modaluseradd-profilesetting-manage'>
									<ButtonHipHop
										name='cancle'
										onClick={() => closeModalAdd(false)}></ButtonHipHop>
									<ButtonHipHop type='submit' name='Save'></ButtonHipHop>
								</div>
							</div>
						</div>
					</div>
				</Box>
			</Modal>
		</>
	);
};
