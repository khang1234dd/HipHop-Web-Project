
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography,Box } from '@mui/material';
// components

import { PostCard, PostsSort, PostsSearch } from '../Common/PostCard';
//

const POST_TITLES = [
    'Whiteboard Templates By Industry Leaders',
    'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
    'Designify Agency Landing Page Design',
    '✨What is Done is Done ✨',
    'Fresh Prince',
    'Six Socks Studio',
    'vincenzo de cotiis’ crossing over showcases a research on contamination',
    'Simple, Great Looking Animations in Your Project | Video Tutorial',
    '40 Free Serif Fonts for Digital Designers',
    'Examining the Evolution of the Typical Web Design Client',
    'Katie Griffin loves making that homey art',
    'The American Dream retold through mid-century railroad graphics',
    'Illustration System Design',
    'CarZio-Delivery Driver App SignIn/SignUp',
    'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
    'Tylko Organise effortlessly -3D & Motion Design',
    'RAYO ?? A expanded visual arts festival identity',
    'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
    'Inside the Mind of Samuel Day',
    'Portfolio Review: Is This Portfolio Too Creative?',
    'Akkers van Margraten',
    'Gradient Ticket icon',
    'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
    'How to Animate a SVG with border-image'
  ];

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

export default function PostManager() {
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
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<AddIcon />}
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
      </Container>
    </Box>
  );
}
