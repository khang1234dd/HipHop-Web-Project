import React from 'react'
import './style.scss'
import {PostCard} from '../../PostCard'
import {Album} from '../../Album'
import CardHoverType2 from '../../CardHoverType2'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import Carousel from '../../Carousel'

const CardHover = styled(CardHoverType2)`
    height: 200px;
    width: 235px;
    border-radius: 40px;
    color:blue;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    
`;

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-wapper-container" >
                {/* <PostCard></PostCard> */}
                <Carousel></Carousel>
                {/* <Album link="http://hiphop-g28.herokuapp.com/upload/image/1.png" header="aaaaaaaa"></Album> */}
                
                <Grid container spacing={2}>
                    <Grid item xs>
                    <CardHover 
                        img="https://i.pinimg.com/564x/01/e1/aa/01e1aa7893e42d8d76321df0fbd8d48b.jpg"
                        name="User"
                        number="100"
                    />
                    </Grid>
                    <Grid item xs>
                    <CardHover 
                        img="https://i.pinimg.com/564x/5a/d6/74/5ad674a0e19f8b364357500b03ba5d09.jpg" 
                        name="Album"
                        number="200"
                    />
                    </Grid>
                    <Grid item xs>
                    <CardHover 
                        img="https://i.pinimg.com/736x/66/05/44/660544a1d54e9867a2ffdd1a7f222e7f.jpg" 
                        name="Song"
                        number="200"
                    />
                    </Grid>
                    <Grid item xs>
                    <CardHover 
                        img="https://i.pinimg.com/564x/ec/1b/fb/ec1bfbeb59fa91a52c56d5c76822f01d.jpg" 
                        name="Post"
                        number="200"
                    />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
