import React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import {styled} from '@mui/material/styles';

const ControlsMain = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',

});

const StyleButtonSkip = styled('button')({
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer' ,
    fontSize: '18px' ,
    color:  '#888',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
});

const StyleButtonPlay = styled('button')({
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color:  '#FFF' ,
    fontSize:'24px',
    borderRadius: '50%',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.8),-4px -4px 10px rgba(255,255,255,0.4),inset -4px -4px 10px rgba(0,0,0,0.4),inset 4px 4px 10px rgba(255,255,255,0.4)',
    backgroundColor: '#FFCE00',
    margin: '0px 20px',
});

const SongControls = () => {
    return (
        <ControlsMain>
            <StyleButtonSkip>
                <FastRewindIcon></FastRewindIcon>

            </StyleButtonSkip>
            <StyleButtonPlay >
                <PlayArrowIcon></PlayArrowIcon>
            </StyleButtonPlay>
            <StyleButtonSkip>
                <FastForwardIcon></FastForwardIcon>
            </StyleButtonSkip>
            
        </ControlsMain>
    )
}

export default SongControls
