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

import { VideoMusicCard, VideoMusicSearch, VideoMusicModal } from '../Common/VideoMusicCard';
import {getAllCategoryApi,getVideoMusicApi, getAllVideoMusicApi} from '../../../Apis/admin.api'
import Preload from '../Common/Preload'


// ----------------------------------------------------------------------

const MODALCREATEVIDEOMUSIC ={
    title: 'new music video',
    typeCreate: 1,

    chill: [
    {id: 1 , field: 'Music Video Name',inputName1:'videoname', fieldSelect: 'Music Video Category',inputName2:'categoryId', boxSelect: true},
    {id: 2 , field: 'Music Video Author',inputName:'videoauthor'},
    {id: 3 , field: 'Music Video Embed',inputName:'embedId'},
    ]
}



const VideoMusicManager = () => {
    const [open, setOpen] = useState(false);
    const [pagination, setPagination] = useState({_page: 1, _limit:4})
    const [categoryArray, setCategoryArray] = useState([])
    const [filter, setFilter] = useState({})
    const [congtachanhtrinh,setCongTacHanhTrinh] = useState(false)
    const pageNumber = Math.ceil(pagination._total / pagination._limit)
    const [VIDEOS,setVIDEOS] = useState([])

    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)

    const [MUSICVIDEOALL, setMUSICVIDEOALL] = useState([])
    const [search,setSearch] = useState('')
    const [checkLength, setCheckLength] = useState(false)
    const [MUSICVIDEOLISTNEW, setMUSICVIDEOLISTNEW] = useState([])


    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setOpen(true)
    }

    const handleChangePage = (event, value) => {
      console.log(value)
      setPagination({_page: value, _limit: pagination._limit, _total: pagination._total  });
      setFilter(pagination)
      setLoading(false)
      setCompleted(false)
      console.log(pagination)
    };

    useEffect(() => {
      setTimeout(() => {
        (async () => {
          const res = await getVideoMusicApi({page: pagination._page, limit:pagination._limit});
          setVIDEOS(res.video)

          const res1 = await getAllVideoMusicApi();
          setMUSICVIDEOALL(res1.video)

          const res2 = await getAllCategoryApi();
          setCategoryArray(res2.category)
          
          setPagination(res.pagination)
          console.log(res)
          console.log(res.video)
          console.log(pagination)
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
          </>:<Box
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
                  Music Video
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
                    New Music Video
                  </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                  <VideoMusicSearch videomusic={MUSICVIDEOALL}  setMUSICVIDEOLISTNEW={setMUSICVIDEOLISTNEW} setCheckLength={setCheckLength} total={pagination._total} />
                </Stack>

                <Grid container spacing={2}>
                    {!checkLength ? 
                    VIDEOS.map((value, index) => {
                        return (
                            <Grid item xs={6} key={index.toString()} >
                                <VideoMusicCard dataCat={categoryArray} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...value}></VideoMusicCard>
                            </Grid>
                        )
                    })
                    : MUSICVIDEOLISTNEW.map((value, index) => {
                      return (
                          <Grid item xs={6} key={index.toString()} >
                              <VideoMusicCard dataCat={categoryArray} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...value}></VideoMusicCard>
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
            <VideoMusicModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} dataCat={categoryArray} {...MODALCREATEVIDEOMUSIC}></VideoMusicModal>
            
        </Box>
          }
        </>
    )
}

export default VideoMusicManager
