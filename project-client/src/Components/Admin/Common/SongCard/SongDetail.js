import React from 'react'
import {styled} from '@mui/material/styles';

const DetailMain = styled('div')({
});
const DetailImg = styled('div')({
    width: 'fit-content',
    height: 'fit-content',
    margin: '18px auto',

});

const ImgElement = styled('img')({
    display: 'block',
    margin: '0px auto',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    
    // maxHeight: '250px',
    borderRadius:  '50%',
    boxShadow: '6px 6px 12px rgba(0,0,0,0.8), -6px -6px 12px rgba(255,255,255,0.4)'
});


const DetailTitle = styled('h3')({
    color: '#EEE',
    fontSize: '28px',
    textShadow: '6px 6px 12px rgba(0,0,0,0.8), -6px -6px 12px rgba(255,255,255,0.4)',
    textAlign: 'center',
    marginBottom: '10px',

});

const DetailSongAuthor = styled('h4')({
    color: '#AAA',
    fontSize: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(255,255,255,0.4)',
    textAlign: 'center',
    marginBottom: '20px',
});

const SongDetail = (props) => {
    const {songName , songAuthor, songImg} = props
    return (
        <DetailMain>
            <DetailImg>
                <ImgElement src={songImg} alt={songName} />
            </DetailImg>
            <DetailTitle>{songName}</DetailTitle>
            <DetailSongAuthor>{songAuthor}</DetailSongAuthor>
        </DetailMain>
    )
}

export default SongDetail
