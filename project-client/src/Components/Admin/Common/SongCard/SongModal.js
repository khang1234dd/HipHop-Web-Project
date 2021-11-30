import React, {useState} from 'react'
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

const SongModal = ({open, handleClose , ...modal }) => {
  const [image,setImage] = useState("https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg")
  const [uploadfile, setUploadFile]= useState("")
  // const [err,setErr] =useState(false)

  const handleImage = (event) =>{
    const reader = new FileReader();
    console.log(reader)
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(event.target.files[0])
    console.log(reader)
    console.log(event.target.files[0])
  }

  const handleUploadFile = (event) =>{
    if(event.target.files[0].size <= 3*1024*1024)
    {
      const reader = new FileReader();
      console.log(reader)
      // reader.onload = () => {
      //   if(reader.readyState === 2){
      //     setUploadFile
          
      //   }
      // }
      // setUploadFile(event.target.files[0])
      setUploadFile(event.target.files[0].name)
      reader.readAsDataURL(event.target.files[0])
    }
    else {
      alert("Please upload file low size")
    }
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
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" sx={{fontFamily: 'Chakra Petch, sans-serif', fontWeight:600 ,color: '#9B2335',textTransform: 'uppercase',}}>
              {modal.title}
            </Typography>
            
            {modal.chill.map((value,index)=> {
              return (
                <>
                  {value.boxImage && !value.boxFile ?
                  <StyleBoxUpdate>
                    
                    <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, mb:1, fontFamily: 'Chakra Petch, sans-serif' }}>
                        {value.field}
                      </Typography>
                      <StyleImage src={image} alt="image" />
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
                          hidden
                        />
                      </ButtonImage>
                    
                    </StyleBoxUpdate>
                  : value.boxFile ?
                  <StyleBoxFile>
                    {uploadfile !== "" ?  <Chip label={uploadfile} sx={{mb:1}} ></Chip>: <></>}
                  <ButtonFile
                    variant="contained"
                    component="label"
                    startIcon={<MusicIcon></MusicIcon>}
                    fullWidth
                    >
                      Upload File Song
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleUploadFile}
                        hidden
                      />
                  </ButtonFile>
                  </StyleBoxFile>
                  : <Grid key={index.toString()} container spacing={1} direction="column" justifyContent="center" alignItems="left">
                      <Grid item xs>
                        <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                            {value.field}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <StyledInputElement  aria-label="input" placeholder="Type something..." />
                      </Grid>
                    </Grid>

                  }
                </>
                
              )
            })}
            <Divider variant  light={true} sx={{mt: 2, mb: 2}} />

            <Grid container alignItems='left' direction="column" justifyContent="center">
              <Button sx={{color: '#9B2335', fontFamily: 'Chakra Petch, sans-serif'}}>{modal.typeCreate ? 'Submit' : 'Update'}</Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    )
}

export default SongModal
