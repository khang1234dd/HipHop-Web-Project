import React, {useState, useEffect} from 'react'
import './style.scss'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AddPhoto from '@mui/icons-material/AddPhotoAlternate';
import MusicIcon from '@mui/icons-material/LibraryMusic';
import Chip from '@mui/material/Chip'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PostEditor from './PostEditor'
import {getAllCategoryApi, createPostApi} from '../../../../Apis/admin.api'
import toastNotify from'../../../Toast';
import {vlCreatePost} from '../Validate'



const style = {
    position: 'absolute',
    top: '50%',
    left: '58%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #9B2335',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '500px',

};

const StyleBoxUpdate = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  margin: 0,
  marginBottom: '12px'
});

const StyleImage = styled('img')({
  width: '150px',
  height: '150px',
  objectFit:'cover',
  borderRadius: '50%',
  marginBottom: '12px',
  transition: 'width 2s',
  '&:hover': {
    borderRadius: '2%',
    width: '375px',
  }
});

const ButtonImage = styled(Button)({
  width: '200px',
  transition: 'width 2s',
  '&:hover': {
    borderRadius: '2%',
    width: '375px',
  }
});


const ButtonFile = styled(Button)({
  width: '300px',
  transition: 'width 2s',
  '&:hover': {
    borderRadius: '2%',
    width: '400px',
  }
});

const StyleBoxFile = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
});

const StyledInputElement = styled('input')`
  width: 90%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`;

const StyledTextareaElement = styled('textarea')`
  width: 90%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`;

const PostModal = ({open, handleClose , ...modal }) => {
  const [imagepreview,setImagePreview] = useState("https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg")
  const [category, setCategory] = useState('');
  const [categoryArray, setCategoryArray] = useState([]);
  const [image, setImage] = useState('')
  const [convertedContent, setConvertedContent] = useState('')


  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImage = (event) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setImagePreview(reader.result)
      }
    }
    // reader.readAsDataURL(event.target.files[0])
  }

  useEffect(() => {
    (async () => {
        const res = await getAllCategoryApi();
        setCategoryArray(res.category)
        console.log(categoryArray)

  })();
}, []);


const handleSubmit = async e => {
  e.preventDefault();
  console.log('submit!')
  const namePost = e.target.namePost.value;
  const tinydes = e.target.tinydes.value;
  const description = convertedContent.toString();
  const categoryId = e.target.categoryId.value.toString();
  const image = e.target.image.files[0];
  const isvaliddata = vlCreatePost(namePost, tinydes,description,categoryId,image);
  if (isvaliddata) {
    const formData = new FormData();
    formData.append('file', image)
    const res = await createPostApi({ namePost, tinydes,description,categoryId,image: formData });
    if (res.success) {
      toastNotify('Your Post has been created', 'success');
    } else {
      toastNotify(res.message, 'error');
    }
  }
};
const handleUpdate = () => {

}

   
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{}}
        
      >
        <Fade in={open} >
          <Box sx={style} component="form" className="kzScrollStyle" onSubmit={modal.typeCreate ? handleSubmit :handleUpdate}>
            <Typography id="transition-modal-title" variant="h4" component="h2" sx={{fontFamily: 'Chakra Petch, sans-serif', fontWeight:600 ,color: '#9B2335',textTransform: 'uppercase',}}>
              {modal.title}
            </Typography>
            
            {modal.chill.map((value,index)=> {
              return (
                <>
                  {value.boxImage  ?
                  <StyleBoxUpdate>
                    
                    <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, mb:1, fontFamily: 'Chakra Petch, sans-serif' }}>
                        {value.field}
                      </Typography>
                      <StyleImage src={imagepreview} alt="image" />
                      <ButtonImage
                      variant="contained"
                      component="label"
                      startIcon={<AddPhoto></AddPhoto>}
                      fullWidth
                      >
                        Upload Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImage}
                          name={value.inputName}
                          hidden
                        />
                      </ButtonImage>
                    
                    </StyleBoxUpdate>
   
                  : value.boxSelect ?
                  <Grid container spacing={1} direction="row" justifyContent="space-between" alignItems="left"> 
                    <Grid container item xs={6} spacing={1} direction="column" justifyContent="center" alignItems="left">
                      <Grid item xs>
                        <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                            {value.field}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <StyledInputElement name={value.inputName1}  aria-label="input" placeholder="Type something..." />
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} spacing={1} direction="column" justifyContent="center" alignItems="left">
                        <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, ml:1, fontFamily: 'Chakra Petch, sans-serif' }}>
                            {value.fieldSelect}
                        </Typography>
                      <FormControl sx={{ml:1, mt:1.5}} size="small" >
                          <InputLabel id="select-category">Category</InputLabel>
                          <Select
                            labelId="select-category"
                            id="select"
                            name={value.inputName2}
                            value={category}
                            label="Category"
                            onChange={handleChange}
                            autoHeight
                          >
                            {categoryArray.map((value,index)=>{
                              return (
                                <MenuItem key={index.toString()} value={value._id}>{value.name}</MenuItem>
                              )
                            })}
                            
                          </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  : value.boxEditor ?
                    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="left">
                      <Grid item xs>
                        <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                            {value.field}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <PostEditor setConvertedContent={setConvertedContent}></PostEditor>
                      </Grid>
                    </Grid>
                    
                  : value.boxTextArea ?
                    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="left">
                        <Grid item xs>
                          <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                              {value.field}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <StyledTextareaElement name={value.inputName}  aria-label="input" placeholder="Type something..." />
                        </Grid>
                    </Grid>
                  : <Grid container spacing={1} direction="column" justifyContent="center" alignItems="left">
                      <Grid item xs>
                        <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                            {value.field}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <StyledInputElement name={value.inputName}  aria-label="input" placeholder="Type something..." />
                      </Grid>
                    </Grid>

                  }
                </>
                
              )
            })}
            <Divider variant  light={true} sx={{mt: 2, mb: 2}} />

            <Grid container alignItems='left' direction="column" justifyContent="center">
              <Button type="submit" sx={{color: '#9B2335', fontFamily: 'Chakra Petch, sans-serif'}}>{modal.typeCreate ? 'Submit' : 'Update'}</Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    )
}

export default PostModal
