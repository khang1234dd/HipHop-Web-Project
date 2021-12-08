import React, {useState, useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import ld from 'lodash'

// material
import { Grid, Button, Container, Stack, Typography,Box , TextField, Autocomplete, InputAdornment } from '@mui/material';
// components
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import { PostCard, PostsSort, PostsSearch, PostModal } from '../Common/PostCard';
import Pagination from '@mui/material/Pagination';

import {getPostApi, getAllPostApi ,getAllCategoryApi} from '../../../Apis/admin.api'
import toastNotify from'../../Toast';
import {vlCreatePost} from '../Common/Validate'
import Preload from '../Common/Preload'


//


// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

const MODALCREATEPOST ={
  title: 'new post',
  typeCreate: 1,

  chill: [
  {id: 1 , field: 'Post Name',inputName1:'namePost', fieldSelect: 'Post Category',inputName2:'categoryId', boxSelect: true},
  {id: 2 , field: 'Tiny Description',inputName:'tinydes' , boxTextArea: true},
  {id: 3 , field: 'Description',inputName:'description',boxEditor: true},
  {id: 4 , field: 'Post Image',inputName:'image' , boxImage: true },
  ]
}

const RootStyle = styled('div')(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {
      width: 240,
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`
    }
  },
  '& .MuiAutocomplete-option': {
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.palette.divider}`
    }
  }
}));


export default function PostManager() {
  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState({_page: 1, _limit:7})
  const [POSTS, setPOSTS] = useState([])
  const [filter, setFilter] = useState({})
  const [categoryArray, setCategoryArray] = useState([])
  const [congtachanhtrinh,setCongTacHanhTrinh] = useState(false)
  const pageNumber = Math.ceil(pagination._total / pagination._limit)
  const [ListPost, setListPost] = useState([])

  const [loading, setLoading] = useState(false)
	const [completed, setCompleted] = useState(false)
  const [search,setSearch] = useState('')
  const [checkLength, setCheckLength] = useState(false)
  const [listPostNew, setListPostNew] = useState([])


  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => setOpen(false);


  const handleChangePage = (event, value) => {
    console.log(value)
    setPagination({_page: value, _limit: 7, _total: pagination._total  });
    setFilter(pagination)
    setLoading(false)
    setCompleted(false)
    console.log(pagination)
  };

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const res = await getPostApi({page: pagination._page, limit:pagination._limit})
        setPOSTS(res.post)
        setPagination(res.pagination)
        const res1 = await getAllPostApi();
        setListPost(res1.post);
        const res2 = await getAllCategoryApi();
        setCategoryArray(res2.category)
        setLoading(true)
				  setTimeout(()=>{
				  	setCompleted(true)
				  },1000)
      })();
    },250)
    
  }, [filter,congtachanhtrinh]);


  return (
    <div style={{width: 'auto' , height: 'auto'}} key={1}>
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
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom sx={{color: '#9B2335', fontWeight: 600}}>
            Post
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
            New Post
          </Button>
        </Stack>

        
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <PostsSearch posts={ListPost} setListPostNew={setListPostNew} setCheckLength={setCheckLength} total={pagination._total}/>
        </Stack>

        <Grid container spacing={3}>
 
            {!checkLength? 
              POSTS.map((post, index) => (
 
                <PostCard setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh}  post={post} index={index} dataCat={categoryArray} />
            ))
            : listPostNew.map((post, index) => (
              <PostCard setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} post={post} index={index} dataCat={categoryArray} />
            ))
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
      <PostModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALCREATEPOST} dataCat={categoryArray}></PostModal>
    </Box>
    }
    </div>
  );
}
