import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CategorySort = ({handleSeeMore}) => {
    const handleSeeMore1 = () => {
        handleSeeMore()
    }
    return (
        <Box
            component="button"
            onClick={handleSeeMore1}
            sx={{
                backgroundColor: '#fff',
                border: '1px solid #9B2335',
                borderRadius: '4px',
                width: '100%',
                transition:'transform 0.5s',
                '&:hover': {
                    transform: 'scale(1.02,1.02)',
                    opacity: 0.8,
                    cursor: 'pointer'
                }
            }}
            
        >
            <Typography variant="h3" component="h3" noWrap sx={{fontFamily:'Oswald, sans-serif', fontWeight:600, color: '#9B2335'}}>SEE MORE</Typography>
            
        </Box>
    )
}

export default CategorySort
