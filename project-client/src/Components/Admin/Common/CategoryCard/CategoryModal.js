import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import toastNotify from'../../../Toast';
import {createCategoryApi,updateCategoryApi} from '../../../../Apis/admin.api'
import {vlCreateCategory,vlUpdateCategory} from '../Validate'

const style = {
    position: 'absolute',
    top: '42%',
    left: '58%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #9B2335',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
};

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

const CategoryModal = ({open, handleClose , data,...modal}) => {
  const createCategory = async e => {
		e.preventDefault();
		const categoryname = e.target.categoryname.value;
		const categorytinydes = e.target.description.value;
		const isvaliddata = vlCreateCategory(categoryname, categorytinydes);
		if (isvaliddata) {
			const res = await createCategoryApi({ categoryname, categorytinydes });
			if (res.success) {
				toastNotify('Your category has been created', 'success');
        
        handleClose();
        window.location.reload();
			} else {
				toastNotify(res.message, 'error');
			}
		}
	};

  const updateCategory = async e => {
		e.preventDefault();
    console.log('update!')
    console.log('data!',data)
		const categoryname =
      data && e.target.categoryname.value === ""
        ? data.name
        : e.target.categoryname.value;
    const tinydes =
      data && e.target.description.value === ""
        ? data.tinydes
        : e.target.description.value;

    const isvaliddata = vlUpdateCategory(
      categoryname,
      tinydes,
    );

    if (isvaliddata) {
      const res = await updateCategoryApi({
        categoryname: categoryname,
        categorytinydes: tinydes,
        id: data._id,
      });
      if (res.success) {
        toastNotify("Your Category has been updated", "success");
        console.log(res);
        handleClose();
        window.location.reload();

      } else {
        toastNotify(res.message, "error");
      }
    }
	};
   
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
          <Box sx={style} component="form" onSubmit={modal.typeCreate? createCategory : updateCategory}>
            <Typography id="transition-modal-title" variant="h4" component="h2" sx={{textTransform: 'uppercase',fontFamily: 'Chakra Petch, sans-serif', fontWeight:600 ,color: '#9B2335'}}>
              {modal.title}
              {/* NEW CATEGORY */}
            </Typography>
            
            {modal.chill.map((value,index)=> {
              return (
                <Grid key={index.toString()} container spacing={1} direction="column" justifyContent="center" alignItems="left">
                  <Grid item xs>
                    <Typography id="transition-modal-description" variant="inherit" sx={{ mt: 2, fontFamily: 'Chakra Petch, sans-serif' }}>
                      {value.field}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <StyledInputElement name={value.inputName}  aria-label="input" placeholder={data && value.id ===1 ? data.name : data && value.id ===2? data.tinydes : "Type something..."} />
                  </Grid>
                </Grid>
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

export default CategoryModal
