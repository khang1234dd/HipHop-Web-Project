
import { useRef, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Link as RouterLink } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FlagIcon from '@mui/icons-material/Flag';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DoneAllIcon from '@mui/icons-material/DoneAll';

// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Button } from '@mui/material';

import {SweetAlertDeletePost,SweetAlertPostPass,SweetAlertPostPublic,SweetAlertPostHot,SweetAlertPostBanned} from '../../utils/SweetAlert' 

import toastNotify from "../../../Toast";

// ----------------------------------------------------------------------

export default function PostMoreMenu({handleUpdate, post, setCongTacHanhTrinh, congtachanhtrinh}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    const action = await SweetAlertDeletePost(post._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }

  }

  const handlePass = async () => {
    const action = await SweetAlertPostPass(post._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }

  const handlePublic = async () => {
    const action = await SweetAlertPostPublic(post._id)
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }

  const handleHot = async () => {
    const action = await SweetAlertPostHot(post._id,'This post is hot', 'This post has been changed')
    if(action){
      setCongTacHanhTrinh(congtachanhtrinh ? false : true)
    }
  }
  const handleBan= async () => {
    const action = await SweetAlertPostBanned(post._id,'Banned', 'This post has been banned')
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
          sx: { width: 200, maxWidth: '100%'}
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem  fullWidth component={Button} onClick={handleDelete} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <DeleteIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2', textAlign: 'left'  }} />
        </MenuItem>

        <MenuItem fullWidth  component={Button} onClick={handleUpdate}  sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <EditIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
        </MenuItem>

        {post.pass? <></>
        :
        <MenuItem fullWidth   component={Button} onClick={handlePass}  sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <DoneAllIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Pass" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
        </MenuItem>
        }

        { post.public 
        ? <MenuItem fullWidth  component={Button} onClick={handlePublic} sx={{ color: 'text.secondary' }}>
            <ListItemIcon>
              <VpnKeyIcon sx={{width: 24, height:24}} />
            </ListItemIcon>
            <ListItemText primary="Private" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
          </MenuItem>
        :  <MenuItem fullWidth   component={Button} onClick={handlePublic} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <AutoAwesomeIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Public" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
        </MenuItem>
        }
  
        { post.hot ?<></>
        :<MenuItem fullWidth   component={Button} onClick={handleHot} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <LocalFireDepartmentIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Hot" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
        </MenuItem>
        }

        {post.banned ? <></> 
        :<MenuItem fullWidth   component={Button} onClick={handleBan} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <FlagIcon sx={{width: 24, height:24}} />
          </ListItemIcon>
          <ListItemText primary="Ban" primaryTypographyProps={{ variant: 'body2', textAlign: 'left' }} />
        </MenuItem>
        }
      </Menu>
    </>
  );
}
