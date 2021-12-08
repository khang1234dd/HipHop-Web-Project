
import { useRef, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Link as RouterLink } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import MoreVertIcon from '@mui/icons-material/MoreVert';

// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

import {SweetAlertVideoMusicPublic, SweetAlertDeleteVideoMusic} from '../../utils/SweetAlert' 

// ----------------------------------------------------------------------

export default function VideoMusicOption({handleUpdate, handleUpdateImage ,setCongTacHanhTrinh, congtachanhtrinh, ...videomusic}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handlePublic = async () => {
    const action = await SweetAlertVideoMusicPublic(videomusic._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
    console.log(action)
  }
  const handleUpdateImage1 = () => {
      if(handleUpdateImage){
        handleUpdateImage()
      }
    
  }

  const handleDelete = async () => {
    const action = await SweetAlertDeleteVideoMusic(videomusic._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }

  const handleUpdate1 = () => {
      if(handleUpdate){
        handleUpdate()
      }
  }

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <MoreVertIcon sx={{width: 24, height:24, color: '#9B2335'}}  />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleDelete} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <DeleteIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleUpdate1}  sx={{ color: 'text.secondary' }}>
          <ListItemIcon >
            <EditIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handlePublic} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            {videomusic.public ?<VpnKeyIcon sx={{width: 24, height:24}} /> : <AutoAwesomeIcon sx={{width: 24, height:24}} />}
          </ListItemIcon>
          <ListItemText primary={videomusic.public ? "Private" : "Public"} primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleUpdateImage1} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <AutoFixHighIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit Video Image" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
