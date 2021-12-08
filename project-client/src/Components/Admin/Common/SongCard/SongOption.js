
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

import {SweetAlertDeleteSong,SweetAlertSongPublic} from '../../utils/SweetAlert' 

// ----------------------------------------------------------------------

export default function SongOption({handleUpdate, handleUpdateImage ,handleUpdateFile ,setCongTacHanhTrinh, congtachanhtrinh, ...song}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handlePublic = async () => {
    const action = await SweetAlertSongPublic(song._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }
  const handleUpdateImage1 = () => {
    handleUpdateImage()
  }
  const handleUpdateFile1 = () => {
    handleUpdateFile()
  }

  const handleDelete = async () => {
    const action = await SweetAlertDeleteSong(song._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
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

        <MenuItem onClick={handleUpdate}  sx={{ color: 'text.secondary' }}>
          <ListItemIcon >
            <EditIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handlePublic} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            {song.public ?<VpnKeyIcon sx={{width: 24, height:24}} /> : <AutoAwesomeIcon sx={{width: 24, height:24}} />}
          </ListItemIcon>
          <ListItemText primary={song.public ? "Private" : "Public"} primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleUpdateImage1} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <AutoFixHighIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit Song Image" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleUpdateFile1} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <AudiotrackIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit Song File" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
