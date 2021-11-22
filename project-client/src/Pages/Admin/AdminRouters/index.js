import React from 'react'
import './style-dashboard.scss'
import { BrowserRouter as Router, Routes, Route, Link, useMatch, useLocation, useParams   } from 'react-router-dom';

import NavigationAdminTop from '../../../Components/NavigationAdminTop'
import NavigationAdmin from '../../../Components/NavigationAdmin'
import DashboardContent from '../../../Components/Admin/Dashboard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserManager from '../../../Components/Admin/UserManager'
import PostManager from '../../../Components/Admin/PostManager';

const Dashboard = () => {
    const [offset, setOffset] = React.useState(0);
    const [shadow, setShadow] = React.useState(0);

    React.useEffect(() => {
        if(offset !== 0)
        {
            window.onscroll = () => {
              setOffset(window.pageYOffset)
              
            }
            setShadow(2)
            console.log('shadow', shadow)
        }
        else{
            window.onscroll = () => {
                setOffset(window.pageYOffset)
                
              }
              setShadow(0)
            console.log('shadow', shadow)
        }
    }, [offset]);

    console.log(offset);


    return (
        <React.Fragment >
            <div className='kz-background'>
                <NavigationAdminTop shadow={shadow}></NavigationAdminTop>
        
                <NavigationAdmin sx={{'& .MuiDrawer-paper': {border: 'none'}}}></NavigationAdmin>
                <Box sx={{height: 155, width:'100%', backgroundColor: "#9B2335", position: 'sticky', top: 64, left: 0}} />

                <Routes>
                    <Route path="/" element={
                        <Box container sx={{marginLeft:'237px'  , position: 'relative', marginTop:'-155'}}>
                            <DashboardContent />
                        </Box>
                    } 
                    />
                    <Route 
                        path="/User" 
                        element={
                            <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                                <UserManager />
                            </Box>
                        } 
                    />

                    <Route 
                        path="/Post" 
                        element={
                            <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                                <PostManager />
                            </Box>
                        } 
                    />

                    <Route 
                        path="/Album" 
                        element={
                            <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                                <UserManager />
                            </Box>
                        } 
                    />
                    <Route 
                        path="/Song" 
                        element={
                            <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                                <UserManager />
                            </Box>
                        } 
                    />
                    <Route 
                        path="/Category" 
                        element={
                            <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                                <UserManager />
                            </Box>
                        } 
                    />

                </Routes>
                  
{/*                 
                    <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155', paddingBottom: '10px'}}>
                        <UserManager />
                    </Box>
                :location.pathname==='/admin/Album'?
                    <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155'}}>
                        <UserManager />
                    </Box>
                :location.pathname==='/admin/Post'?
                <Box container sx={{marginLeft:'237px', padding: '0px 18px' , position: 'relative', marginTop:'-155'}}>
                    <UserManager />
                </Box>
                :location.pathname==='/admin/Category'?
                <Box container sx={{marginLeft:'237px', padding: '0px 18px', height:'100%' , position: 'relative', marginTop:'-155'}}>
                    <UserManager />
                </Box>
                :location.pathname==='/admin/Song'?
                <Box container sx={{marginLeft:'237px', padding: '0px 18px', height:'100%' , position: 'relative', marginTop:'-155'}}>
                    <UserManager />
                </Box>
                :console.log('fuck')
                } */}


            </div>
        </React.Fragment>
    )
}

export default Dashboard
