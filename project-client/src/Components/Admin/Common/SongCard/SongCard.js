import React, {useState} from 'react'
import {styled} from '@mui/material/styles';

import SongDetail from './SongDetail'
import SongControls from './SongControls'
import SongOption  from './SongOption';
import Chip from '@mui/material/Chip'
import SongModal from './SongModal'

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

const MODALUPDATESONG ={
    title: 'edit song',
    typeCreate: 2,

    chill: [
    {id: 1 , field: 'Song Name',inputName1:'songname', fieldSelect: 'Song Category',inputName2:'categoryId', boxSelect: true},
    {id: 2 , field: 'Song Author',inputName:'songauthor'},
    ]
}

const MODALUPDATEIMAGE ={
    title: 'update song image',
    typeCreate: 3,
    chill: [
      {id: 1 , field: 'Song Image',inputName:'image' , boxImage: true },
    ]
}

const MODALUPDATEFILE ={
    title: 'update song file',
    typeCreate: 4,
    chill: [
      {id: 1 , field: 'Song File',inputName:'song' , boxFile: true},
    ]
}


const SongCard = (props) => {
    const {setCongTacHanhTrinh,congtachanhtrinh, dataCat ,...song } = props
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleUpdate = () => {
        setOpen(true)
    }

    const handleUpdateImage = () => {
        setOpen1(true)
    }

    const handleUpdateFile = () => {
        setOpen2(true)
    }


    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);
    return (
        <SongMain>
            <audio></audio>
            <TopStyle>
                {song.public ?<Chip color="success" label="Public" />
                : <Chip color="error" label="Private" />}
                {/* <Chip color="secondary" label="Private" sx={{marginRight: '0.1rem', marginTop:'5px'}}/>, */}
                <SongOption handleUpdateFile={handleUpdateFile} handleUpdateImage={handleUpdateImage} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} handleUpdate={handleUpdate} {...song}></SongOption>
            </TopStyle>
            
            <SongDetail {...song}></SongDetail>
            <SongControls {...song}></SongControls>
            

            <SongModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALUPDATESONG} data={song} dataCat={dataCat} ></SongModal>
            <SongModal open={open1} handleClose={handleClose1} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALUPDATEIMAGE} data={song} dataCat={dataCat} ></SongModal>
            <SongModal open={open2} handleClose={handleClose2} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALUPDATEFILE} data={song} dataCat={dataCat} ></SongModal>
            
        </SongMain>
    )
}

export default SongCard
