import React, {useState, useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography,Box } from '@mui/material';
// components

import { PostCard, PostsSort, PostsSearch, PostModal } from '../Common/PostCard';
import Pagination from '@mui/material/Pagination';

import {getAllPostApi} from '../../../Apis/admin.api'
import toastNotify from'../../Toast';
import {vlCreatePost} from '../Common/Validate'


//

const POSTS = [
    {
      id: 1,
      cover: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
      title: 'aaaa',
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
    cover: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
    title: 'aaaa',
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
  cover: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
  title: 'aaaa',
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
  cover: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
  title: 'aaaa',
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
  cover: 'https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_4.jpg',
  title: 'aaaa',
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

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

const MODALCREATEPOST ={
  title: 'new post',
  typeCreate: true,

  chill: [
  {id: 1 , field: 'Post Name',inputName1:'namePost', fieldSelect: 'Post Category',inputName2:'categoryId', boxSelect: true},
  {id: 2 , field: 'Tiny Description',inputName:'tinydes' , boxTextArea: true},
  {id: 3 , field: 'Description',inputName:'description',boxEditor: true},
  {id: 4 , field: 'Post Image',inputName:'image' , boxImage: true },
  ]
}
const MODALUPDATEPost ={
  title: 'update song',
  typeCreate: false,
  chill: [
  {id: 1 , field: 'Song Name'},
  {id: 2 , field: 'Song Author'},
  {id: 3 , field: 'Song Image', boxImage: true},
  ]
}

export default function PostManager() {
  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(1)
  const [pagination, setPagination] = useState(1)

  const handleOpen = () => {
    setTypeModal(1);
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    setTypeModal(2);
    setOpen(true)
  }

  useEffect(() => {
    (async () => {
        const res = await getAllPostApi({page: pagination, limit:3});
        console.log(res)
        // setCategoryArray(res.category)
        // console.log(categoryArray)

  })();
  }, []);


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
          <PostsSearch posts={POSTS} />
          <PostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
        <Stack mt={5} mb={2} direction="row" alignItems="center" justifyContent="center">
          <Pagination count={10} variant="outlined" color="secondary" />

        </Stack>
      </Container>
      {typeModal === 1 
      ? <PostModal open={open} handleClose={handleClose} {...MODALCREATEPOST}></PostModal>
      : <PostModal open={open} handleClose={handleClose} {...MODALUPDATEPost} ></PostModal>
      }
    </Box>
  );
}
