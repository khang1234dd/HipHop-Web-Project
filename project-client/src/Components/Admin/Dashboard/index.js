import React from 'react'
import './style.scss'
import {PostCard} from '../../PostCard'
import {Album} from '../../Album'
import CardHover from '../../CardHover'
import Grid from '@mui/material/Grid';
import Carousel from '../../Carousel'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-wapper-container">
                {/* <PostCard></PostCard> */}
                <Carousel></Carousel>
                {/* <Album link="http://hiphop-g28.herokuapp.com/upload/image/1.png" header="aaaaaaaa"></Album> */}
                <Grid container spacing={2}>
                    <Grid item xs>
                    <CardHover />
                    </Grid>
                    <Grid item xs>
                    <CardHover />
                    </Grid>
                    <Grid item xs>
                    <CardHover />
                    </Grid>
                    <Grid item xs>
                    <CardHover />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
