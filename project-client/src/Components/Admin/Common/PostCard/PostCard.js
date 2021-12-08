import React, {useState} from 'react';
import EyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link as RouterLink } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Chip, IconButton  } from '@mui/material';
// utils
import { fDate } from '../../utils/formatTime';
import { fShortenNumber } from '../../utils/formatNumber';
//
import SvgIconStyle from '../../utils/SvgIconStyle';

import PostMoreMenu from './PostMoreMenu'

import PostModal from './PostModal';

import {SweetAlertPostHot,SweetAlertPostBanned} from '../../utils/SweetAlert'

// ----------------------------------------------------------------------


const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2)
}));



const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const PostMenu = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 9,
  right: theme.spacing(1),
  bottom: theme.spacing(-6),
}));

const UpdateImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 9,
  right: theme.spacing(1),
  top: theme.spacing(1),
}));

const MODALUPDATEPOST ={
  title: 'update post',
  typeCreate: 2,
  chill: [
  {id: 1 , field: 'Post Name',inputName1:'namePost', fieldSelect: 'Post Category',inputName2:'categoryId', boxSelect: true},
  {id: 2 , field: 'Tiny Description',inputName:'tinydes' , boxTextArea: true},
  {id: 3 , field: 'Description',inputName:'description',boxEditor: true},
  ]
}

const MODALUPDATEIMAGE ={
  title: 'update image',
  typeCreate: 3,
  chill: [
    {id: 1 , field: 'Post Image',inputName:'image' , boxImage: true },
  ]
}


// ----------------------------------------------------------------------


export default function PostCard({ post, index, dataCat, setCongTacHanhTrinh, congtachanhtrinh }) {

  const { name, image  , pass,hot,banned,view, comment, createdAt,owner  } = post;
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const handleDeleteHot = async () => {
    const action = await SweetAlertPostHot(post._id,'Hot has been removed', 'Hot of this post has been deleted')
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }

  const handleDeleteBan = async () => {
    const action = await SweetAlertPostBanned(post._id,'The ban has been lifted', 'The ban has been lifted on this post')
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }

  const handleUpdate = () => {
    setOpen(true)
  }
  const handleUpdate1 = () => {
    setOpen1(true)
  }

  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);

  const POST_INFO = [
    { number: comment, icon: MessageIcon  },
    { number: view, icon: EyeIcon  },
  ];

  return (
    <Grid key={index.toString()} item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
              }
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)'
              }
            })
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              ...((latestPostLarge || latestPost) && { display: 'none' })
            }}
          />
          <AvatarStyle
            alt={owner.name}
            src={'https://hiphop-g28.herokuapp.com/'+ owner.image}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40
              })
            }}
          />

          <PostMenu sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                right: 24,
                width: 40,
                height: 40
              })
            }}>
            <PostMoreMenu handleUpdate={handleUpdate} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} post={post}></PostMoreMenu>
          </PostMenu>

          <UpdateImage sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 300,
                left: 24,
                width: 40,
                height: 40
              })
            }}>
              <IconButton onClick={handleUpdate1} aria-label="delete" sx={{color: '#9B2335'}}>
                <CameraAltIcon />
              </IconButton>
          </UpdateImage>

          <CoverImgStyle alt={name} src={image !== 'upload/image/3.png'? image  :'https://hiphop-g28.herokuapp.com/'+ image} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute'
            })
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'grey.500', display: 'block' }}
          >
            {fDate(createdAt)}
          </Typography>

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white'
              })
            }}
          >
            {name}
          </TitleStyle>

          <InfoStyle>
            <Box sx={{color:'grey.500', marginBottom: '5px'}}>
              Status
            </Box>
            
          </InfoStyle>

          <div className="kzStatusBox">
            
              <Grid 
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
            
              { pass ? <Chip color="info" label="Pass" sx={{marginRight: '0.1rem', marginTop:'5px'}}/>
              : <></>
              }

              { post.public ? <Chip color="success" label="Public" sx={{marginRight: '0.1rem', marginTop:'5px'}}/> 
              : <Chip color="secondary" label="Private" sx={{marginRight: '0.1rem', marginTop:'5px'}}/>
              }

              { hot ? <Chip color="warning" label="Hot" onDelete={handleDeleteHot} sx={{marginRight: '0.1rem', marginTop:'5px'}}/>
              :<></>
              }
              { banned ? <Chip color="error" label="Banned" onDelete={handleDeleteBan} sx={{marginRight: '0.1rem', marginTop:'5px'}}/>
              :<></>
              }
              </Grid>
  
          </div>

          <InfoStyle>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500'
                  })
                }}
              >
                
                <Box component={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} ></Box>
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </InfoStyle>
        </CardContent>
      </Card>
      
      <PostModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALUPDATEPOST} data={post} dataCat={dataCat} ></PostModal>
      <PostModal open={open1} handleClose={handleClose1} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} {...MODALUPDATEIMAGE} data={post} dataCat={dataCat} ></PostModal>
    </Grid>
  );
}
