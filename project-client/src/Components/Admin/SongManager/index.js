import React ,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
// material
import { 
    Box,
    Container,
    Stack,
    Typography,
    Grid,
    Button,
    Divider,} from '@mui/material';
// components

import { SongCard, SongSearch, SongModal } from '../Common/SongCard';


const SONGS = [
    {
      id: 1,
      songImg: 'https://hiphop-g28.herokuapp.com/upload/image/1.png',
      songName: 'Song 1',
      songUrl: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      songAuthor: 'aaa',
      createdAt: Date.now(),
      view: 20000,
      comment: 100000,
      author: {
        name: 'K',
        avatarUrl: `https://hiphop-g28.herokuapp.com/upload/image/1.png`
      }
  },
  {
    id: 2,
    songImg: 'https://hiphop-g28.herokuapp.com/upload/image/1.png',
    songName: 'Song 1',
    songUrl: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    songAuthor: 'aaa',
    createdAt: Date.now(),
    view: 20000,
    comment: 100000,
    author: {
      name: 'K',
      avatarUrl: `https://hiphop-g28.herokuapp.com/upload/image/1.png`
    }
},
{
    id: 3,
    songImg: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
    songName: 'Song 1',
    songUrl: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    songAuthor: 'aaa',
    createdAt: Date.now(),
    view: 20000,
    comment: 100000,
    author: {
      name: 'K',
      avatarUrl: `https://hiphop-g28.herokuapp.com/upload/image/1.png`
    }
},
{
    id: 4,
    songImg: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
    songName: 'Song 1',
    songUrl: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    songAuthor: 'aaa',
    createdAt: Date.now(),
    view: 20000,
    comment: 100000,
    author: {
      name: 'K',
      avatarUrl: `https://hiphop-g28.herokuapp.com/upload/image/1.png`
    }
},
{
    id: 5,
    songImg: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
    songName: 'Song 1',
    songUrl: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    songAuthor: 'aaa',
    createdAt: Date.now(),
    view: 20000,
    comment: 100000,
    author: {
      name: 'K',
      avatarUrl: `https://hiphop-g28.herokuapp.com/upload/image/1.png`
    }
}
]

// ----------------------------------------------------------------------

const MODALCREATESONG ={
    title: 'new song',
    typeCreate: true,

    chill: [
    {id: 1 , field: 'Song Name', },
    {id: 2 , field: 'Song Author'},
    {id: 3 , field: 'Song Image', boxImage: true },
    {id: 4 , field: 'Song File', boxFile: true},
    ]
}
const MODALUPDATESONG ={
    title: 'update song',
    typeCreate: false,
    chill: [
    {id: 1 , field: 'Song Name'},
    {id: 2 , field: 'Song Author'},
    {id: 3 , field: 'Song Image', boxImage: true},
    ]
}



const SongManager = () => {
    const [open, setOpen] = useState(false);
    const [typeModal, setTypeModal] = useState(1);

    const handleOpen = () => {
        setTypeModal(1);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setTypeModal(2);
        setOpen(true)
    }

    return (
        <Box
        sx={{
            marginTop: '-155px',
            // margin-bottom: 10px;
            border: '1px solid #9B2335',
            boxShadow: '0 0 10px 5px #9B2334',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '16px 0px',
            height: 'auto',
            }}
        >
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom sx={{color: '#9B2335', fontWeight: 600}}>
                  Song
                </Typography>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                    sx={{
                      backgroundColor: '#9B2335',
                      '&:hover': {
                          backgroundColor: '#7b1c2a',
                      }
                    }}
                  >
                    New Song
                  </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                  <SongSearch song={SONGS}  />
                </Stack>

                <Grid container spacing={2} >
                    {SONGS.map((value, index) => {
                        return (
                            <Grid item xs={4} key={index.toString()}>
                                <SongCard {...value} handleUpdate={handleUpdate}></SongCard>
                            </Grid>
                        )
                    })}
                    
                </Grid>
            </Container>
            {typeModal === 1 ? 
                <SongModal open={open} handleClose={handleClose} {...MODALCREATESONG}></SongModal>
            : <SongModal open={open} handleClose={handleClose} {...MODALUPDATESONG} ></SongModal>
            }

        </Box>
    )
}

export default SongManager
