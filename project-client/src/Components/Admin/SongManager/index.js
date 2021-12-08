import React ,{useState, useEffect} from 'react'
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
    Divider,
    Pagination,
} from '@mui/material';
// components

import { SongCard, SongSearch, SongModal } from '../Common/SongCard';
import {getAllCategoryApi,getSongApi,getAllSongApi} from '../../../Apis/admin.api'
import Preload from '../Common/Preload'


// ----------------------------------------------------------------------

const MODALCREATESONG ={
    title: 'new song',
    typeCreate: 1,

    chill: [
    {id: 1 , field: 'Song Name',inputName1:'songname', fieldSelect: 'Song Category',inputName2:'categoryId', boxSelect: true},
    {id: 2 , field: 'Song Author',inputName:'songauthor'},
    {id: 4 , field: 'Song File',inputName:'song', boxFile: true },
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
    const [pagination, setPagination] = useState({_page: 1, _limit:6})
    const [categoryArray, setCategoryArray] = useState([])
    const [filter, setFilter] = useState({})
    const [congtachanhtrinh,setCongTacHanhTrinh] = useState(false)
    const pageNumber = Math.ceil(pagination._total / pagination._limit)
    const [SONGS,setSONGS] = useState([])
    const [loading, setLoading] = useState(false)
	  const [completed, setCompleted] = useState(false)

    const [SONGSALL, setSONGSALL] = useState([])
    const [search,setSearch] = useState('')
    const [checkLength, setCheckLength] = useState(false)
    const [SONGLISTNEW, setSONGLISTNEW] = useState([])

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setOpen(true)
    }

    const handleChangePage = (event, value) => {
      setPagination({_page: value, _limit: 6, _total: pagination._total  });
      setFilter(pagination)
      setLoading(false)
      setCompleted(false)
    };

    useEffect(() => {
      setTimeout(() => {
        (async () => {
          const res = await getSongApi({page: pagination._page, limit:pagination._limit});
          setSONGS(res.song)
          const res1 = await getAllSongApi();
          setSONGSALL(res1.song)

          const res2 = await getAllCategoryApi();
          setCategoryArray(res2.category)
          setPagination(res.pagination)
          setLoading(true)
				  setTimeout(()=>{
				  	setCompleted(true)
				  },1000)
  
        })();
      },250)
      
    }, [filter,congtachanhtrinh]);

    return (
      <>
        {!completed ?
          <>
            <Box sx={{marginTop: '-155px',}}>
            {!loading? <Preload  type={1}></Preload> : <Preload type={3}></Preload> }
            </Box>
          </>
        
          
        :<Box
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
                  <SongSearch song={SONGSALL} setSONGLISTNEW={setSONGLISTNEW} setCheckLength={setCheckLength} total={pagination._total} />
                </Stack>

                <Grid container spacing={2} >
                  
                    { !checkLength? 
       
                      SONGS.map((value, index) => {
                          return (
                              <Grid item xs={4} key={index.toString()}>
                                  <SongCard dataCat={categoryArray} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...value}></SongCard>
                              </Grid>
                          )
                      })
                 
                    :  SONGLISTNEW.map((value, index) => {
                      return (
                          <Grid item xs={4} key={index.toString()}>
                              <SongCard dataCat={categoryArray} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...value}></SongCard>
                          </Grid>
                      )
                  })
                  }
                    
                </Grid>

                <Stack mt={5} mb={2} direction="row" alignItems="center" justifyContent="center">
                  <Pagination 
                  count={pageNumber} 
                  variant="outlined" 
                  color="secondary"
                  onChange={handleChangePage}
                  page={pagination._page}
                  />
                </Stack>

            </Container>
            <SongModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} dataCat={categoryArray} {...MODALCREATESONG}></SongModal>
            
        </Box>
        }
      </>
    )
}

export default SongManager
