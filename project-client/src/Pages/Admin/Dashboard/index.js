import React from 'react'
import './style.scss'
import NavigationAdminTop from '../../../Components/NavigationAdminTop'
import NavigationAdmin from '../../../Components/NavigationAdmin'
import DashboardContent from '../../../Components/Admin/Dashboard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    return (
        <React.Fragment>
            <NavigationAdminTop></NavigationAdminTop>
  

            <NavigationAdmin  ></NavigationAdmin>

            <Box container sx={{marginLeft:'237px'}}>
                <DashboardContent />
            </Box>

            
                
        
            
        </React.Fragment>
    )
}

export default Dashboard
