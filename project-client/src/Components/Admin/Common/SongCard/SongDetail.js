import React from 'react'
import {styled} from '@mui/material/styles';
import {Link} from 'react-router-dom'

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


const DetailTitle = styled(Link)({
    color: '#EEE',
    fontSize: '28px',
    textShadow: '6px 6px 12px rgba(0,0,0,0.8), -6px -6px 12px rgba(255,255,255,0.4)',
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const DetailSongAuthor = styled('h4')({
    color: '#AAA',
    fontSize: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(255,255,255,0.4)',
    textAlign: 'center',
    marginBottom: '20px',
});

const SongDetail = ({...song}) => {
    const {name , image, ownersong} = song
    return (
        <DetailMain>
            <DetailImg>
                {image ? <ImgElement src={image} alt={name} />
                :<ImgElement src='https://hiphop-g28.herokuapp.com/upload/image/1.png' alt={name} />}
                
            </DetailImg>
            <DetailTitle to={song.public ? `/audioplayer/${song._id}` : "#"}>{name}</DetailTitle>
            <DetailSongAuthor>{ownersong}</DetailSongAuthor>
        </DetailMain>
    )
}

export default SongDetail
