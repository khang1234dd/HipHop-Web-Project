import React from 'react'
import {Avatar} from "@mui/material"
import "./style.scss"
// import {MoreVert,PlaylistAdd,WatchLater} from "@mui/icons-material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';



export const VideoCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="http://hiphop-g28.herokuapp.com/upload/image/1.png"
                alt="Paella dish"
            />
            <CardHeader
                avatar={
                <Avatar src="http://hiphop-g28.herokuapp.com/upload/image/1.png">
                    
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader = "su"
            />
            <Grid container>
                <Grid xs={6} md={2.5}>
                 <></>
                </Grid>
                <Grid  xs={6} md={8.5}>
                    <p>Kha zoo</p>
                    <p>200 view &bull; 1 week ago</p>

                </Grid>
            </Grid>
            <div className="titleOwner">
                
                
            </div>
            <div className="titleMore">
                
            </div>
        </Card>
    )
}
