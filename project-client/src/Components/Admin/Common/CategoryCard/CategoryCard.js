import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

import {styled} from '@mui/material/styles';

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

const CategoryCard = ({ category, index ,handleUpdate }) => {
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
                    <BoxChill component="button">
                        <RemoveIcon sx={{color: '#9B2335'}}></RemoveIcon>
                    </BoxChill>
                </Box>
            </BoxItem>
        </BoxMain>
    )   
}

export default CategoryCard
