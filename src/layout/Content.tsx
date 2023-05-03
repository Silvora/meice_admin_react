import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
export default function Content() {
  return (
    <React.Fragment>
         <Box
         component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            width:"100%",
            height: '100vh',
            
          }}
        >
          <Toolbar />
          <Box
          sx={{
            width:"calc(100% - 32px)",
            background:"#fff",
            height:"calc(100vh - 94px)",
            m:2,
            p:1
          }}
          >
            <Outlet></Outlet>
          </Box>
        </Box>
    </React.Fragment>
  )
}
