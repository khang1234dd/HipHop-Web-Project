import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

import {styled} from '@mui/material/styles';
import CategoryModal from './CategoryModal'
import {deleteCategoryApi} from '../../../../Apis/admin.api'
import toastNotify from'../../../Toast';

const BoxItem = styled(Box) (({ theme }) => ({
    backgroundColor: '#fff',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    borderRadius: theme.shape.borderRadius *50,
    transition:'padding 0.5s',
    '&:hover': {
        padding: '2px 12px'
    },

}))

const BoxChill = styled(Button) (({ theme }) => ({
    backgroundColor: '#fff',
    border: 'none',
    display: 'flex',
    alignItems:'center',
    width: "90",
    transition: 'transform 0.5s',
    borderRadius: theme.shape.borderRadius *50,
    '&:hover': {
        borderRadius: theme.shape.borderRadius *50,
        boxShadow: '5px 5px 30px 15px #9B2335',
        transform: 'scale(1.02, 1.02)',
    },
}))

const BoxMain = styled(Box) (({ theme }) => ({
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transition:'transform 0.5s' ,
    borderRadius: theme.shape.borderRadius *25,
    '&:hover': {
        borderRadius: theme.shape.borderRadius *50,
        boxShadow: '5px 5px 10px 5px rgba(0,0,0,0.25) ',
        transform: 'scale(1.02, 1.02)',
    },
}))

const MODALUPDATECATEGORY ={
    title: 'UPDATE CATEGORY',
    typeCreate: false,
    chill: [
    {id: 1 , field: 'Category Name', inputName: 'categoryname'},
    {id: 2 , field: 'Description', inputName: 'description'},

    ]
}

const CategoryCard = ({ category, index }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setOpen(true)
    }
    const handleDelete = async () => {
        const res = await deleteCategoryApi(category._id)
        if (res.success) {
            toastNotify("Your Category has been deleted", "success");
            window.location.reload();
          } else {
            toastNotify(res.message, "error");
          }
    }
    return (
        <BoxMain component="div">
            <BoxItem 
            key={index.toString()}
            >
                <Typography 
                variant="h4" 
                noWrap 
                component="h2" 
                sx={{
                    fontFamily:'Oswald, sans-serif',
                    letterSpacing: '1px',
                    fontWeight: 500,
                    pt: 1,
                    pb: 1,
                    
                    
                }}
                >
                    {category.name}
                </Typography>
                <Box sx={{display:'flex', flexDirection: 'row'}} >
                    <BoxChill component="button" onClick={handleUpdate} sx={{mr: 1, '&:hover':{'boxShadow': '5px 5px 30px 15px #669999'}}} item>
                        <CreateIcon sx={{color: '#669999'}} ></CreateIcon>
                    </BoxChill>
                    <BoxChill component="button" onClick={handleDelete}>
                        <RemoveIcon sx={{color: '#9B2335'}}></RemoveIcon>
                    </BoxChill>
                </Box>
            </BoxItem>
            <CategoryModal open={open} handleClose={handleClose} {...MODALUPDATECATEGORY} data={category} ></CategoryModal>
        </BoxMain>
    )   
}

export default CategoryCard
