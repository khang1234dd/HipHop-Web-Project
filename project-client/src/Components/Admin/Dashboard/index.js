import React from 'react'
import './style.scss'
import {PostCard} from '../../PostCard'
import CardHoverType2 from '../../CardHoverType2'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import Carousel from '../../Carousel'
import Box from '@mui/material/Box';
import PieChart from '../Common/PieChart'
const CardHover = styled(CardHoverType2)`
    height: auto;
    width: 300px;
    border-radius: 5px;
    color:blue;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    
`;

const Dashboard = () => {

    return (
        <>
            <div className="dashboard-wapper-container" >
                <div className="kzboxshadow">
                
                        <CardHover 
                            img="https://i.pinimg.com/564x/df/87/c8/df87c8599e33fe73c355de8f32bc1927.jpg"
                            name="User"
                            number="100"
                        />
                        <CardHover 
                            img="https://i.pinimg.com/564x/c7/73/48/c77348c169ea27d62d8fa4ae855f60b6.jpg" 
                            name="Album"
                            number="200"
                        />
                        <CardHover 
                            img="https://i.pinimg.com/564x/a5/21/7a/a5217a2d42a9a64a0077c5cad6dac7ec.jpg" 
                            name="Song"
                            number="200"
                        />
                      
                        <CardHover 
                            img="https://i.pinimg.com/564x/6e/40/e3/6e40e37f3f798cf02241f5ad1f59b33a.jpg" 
                            name="Post"
                            number="200"
                        />
                </div>
            </div>

            <div className="dashboard-wapper-container-chart" >
                <div className="kzboxshadow-1">
                    <Carousel></Carousel>
                </div>

                <div className="kzboxshadow-2">
                    <PieChart></PieChart>
                </div>
                
            
            </div>
        </>
    )
}

export default Dashboard
