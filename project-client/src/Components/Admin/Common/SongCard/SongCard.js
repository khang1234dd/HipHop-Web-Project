import React from 'react'
import {styled} from '@mui/material/styles';

import SongDetail from './SongDetail'
import SongControls from './SongControls'
import SongOption  from './SongOption';
import Chip from '@mui/material/Chip'

const SongMain = styled('div')({
    display: 'block',
    backgroundColor: '#313131',
    padding: '18px',
    borderRadius: '16px',
    boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.8), inset 6px 6px 12px rgba(255, 255, 255, 0.4)',
    transition: 'transform 0.5s' ,
    '&:hover': {
        transform: 'scale(1.02, 1.02)',
    }
});
    
const Title = styled('h4')({
    color: '#fff',
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: '400',
    textAlign: 'center',
});

const TopStyle = styled('p')({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const AutStyle = styled('p')({
    color: '#AAA',
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
});



const SongCard = (props) => {
    const {handleUpdate , ...song } = props
    return (
        <SongMain>
            <audio></audio>
            <TopStyle>
                <Chip color="success" label="Public" /> ,
                {/* <Chip color="secondary" label="Private" sx={{marginRight: '0.1rem', marginTop:'5px'}}/>, */}
                <SongOption handleUpdate={handleUpdate}></SongOption>
            </TopStyle>
            
            <SongDetail {...song}></SongDetail>
            <SongControls></SongControls>
            

            {/* <p><strong></strong>Create by</p> */}

            
        </SongMain>
    )
}

export default SongCard
