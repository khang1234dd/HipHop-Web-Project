import * as React from 'react';
import "./style.scss"
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import {Avatar} from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import AlbumIcon from '@mui/icons-material/Album';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useNavigate, useParams } from 'react-router-dom';

const categories = [
  {
    id: 'Home',
    children: [
      { id: 'Dashboard', icon: <DashboardIcon /> },
    ],
  },
  {
    id: 'Manager',
    children: [
      { id: 'User', icon: <PeopleIcon /> },
      { id: 'Album', icon: <AlbumIcon /> },
      { id: 'Post', icon: <DescriptionIcon />},
      { id: 'Category', icon: <CategoryIcon />},
      { id: 'Song', icon: <LibraryMusicIcon />},
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  py: 1.5,
  px: 3,
};


export default function NavigatorAdmin(props) {
  const { ...other } = props;
  const navigate = useNavigate();
  const handleClick = (e) => {
    
    const link= e.target.innerHTML;
    if(link === 'Dashboard' || link === 'User' || link === 'Album' || link === 'Post' || link === 'Song' || link === 'Category' )
    {
      if(link === 'Dashboard') navigate('/admin' )
      else{
        
        navigate('/admin/' + link)
      }
      
    }
    
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding >
        <div className="kz-background-navtop">
        <div className="frameAvatar">
            <Avatar 
                src="http://hiphop-g28.herokuapp.com/upload/image/1.png"
                sx={{width: '80px', height: '80px'}}
            />
            <div className="fontName">
                Kha Zoo
            </div>
            <div className="fontRole">
                Administrator
            </div>
        </div>
        <ListItem sx={{ ...item, ...itemCategory}}>
          <ListItemIcon>
            <HomeIcon sx={{color: '#fff'}} />
          </ListItemIcon>
          <ListItemText sx={{color: '#fff'}}>Back to hometown</ListItemText>
        </ListItem>
        <Divider sx={{ mt: 2 }} />
        </div>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#fff' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: 'black' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton  onClick={handleClick} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText sx={{ color: 'black' }} >{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}