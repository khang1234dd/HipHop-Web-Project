import React, {useState} from "react";
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import {fDateTime} from '../../utils/formatTime'
import VideoMusicOption from './VideoMusicOption'
import VideoMusicModal from './VideoMusicModal'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'




const VideoMusicMain = styled(Card)({
  width: "auto",
  height: "auto",
  transition: 'transform 0.25s',
  '&:hover':{
    transform: 'scale(1.02,1.02)',
    boxShadow: '5px 10px 8px #888888'
  }
});

const StyleOption = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: "40px" ,
  height: "68px",
});


const MODALUPDATEVIDEO ={
  title: 'edit video music',
    typeCreate: 2,

    chill: [
    {id: 1 , field: 'Video Music Name',inputName1:'videoname', fieldSelect: 'Video Music Category',inputName2:'categoryId', boxSelect: true},
    {id: 2 , field: 'Video Music Author',inputName:'videoauthor'},
    {id: 3 , field: 'Video Music Embed',inputName:'embedId'},
    ]
}

const MODALUPDATEIMAGE ={
  title: 'update video image',
  typeCreate: 3,
  chill: [
    {id: 1 , field: 'Video Image',inputName:'image' , boxImage: true },
  ]
}


const VideoMusicCard = ({congtachanhtrinh,setCongTacHanhTrinh, dataCat, ...videomusic}) => {
  const [open, setOpen] = useState(false);
  const [open1,setOpen1] = useState(false)

  const handleClose= () => {
    setOpen(false);
  }
  const handleClose1= () => {
    setOpen1(false);
  }
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleOpen1 = () =>{
    setOpen1(true)
  }

  return (
    <VideoMusicMain>
      
        <iframe
          width="100%"
          height="322"
          src={"https://www.youtube.com/embed/"+ videomusic.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>

      <CardHeader
        sx={{height:'100px' ,maxHeight: '100px', '& .MuiCardHeader-title':{fontFamily: "Chakra Petch, sans-serif" , fontWeight: 600},  }}
        avatar={
          <Avatar src={videomusic.owner.image ==="" || videomusic.owner.image=== undefined ? "https://hiphop-g28.herokuapp.com/upload/image/1.png" : videomusic.owner.image} alt={videomusic.owner.name}  aria-label="recipe" />
        }
        action={
          <StyleOption>
          <VideoMusicOption handleUpdate={handleOpen} handleUpdateImage={handleOpen1} congtachanhtrinh={congtachanhtrinh} setCongTacHanhTrinh={setCongTacHanhTrinh} {...videomusic}></VideoMusicOption>
          </StyleOption>
        }
        title={<Link to={videomusic.public?`/watchvideos/${videomusic._id}`: "#"}>{videomusic ? videomusic.name : 'no data'}</Link>}
        subheader={videomusic? fDateTime(videomusic.createdAt): 'no date time'}
      />
      <VideoMusicModal open={open} handleClose={handleClose} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} dataCat={dataCat} {...MODALUPDATEVIDEO} data={videomusic}></VideoMusicModal>
      <VideoMusicModal open={open1} handleClose={handleClose1} setCongTacHanhTrinh={setCongTacHanhTrinh} congtachanhtrinh={congtachanhtrinh} dataCat={dataCat} {...MODALUPDATEIMAGE} data={videomusic}></VideoMusicModal>
    </VideoMusicMain>
  );
};

export default VideoMusicCard;
