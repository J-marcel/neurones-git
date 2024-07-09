import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'

export default function Footer() {
  return (
    <>
    <Navbar />
   <Box height={30}/>
            <Sidebar />
        <Box sx={{ display: 'flex' }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Footer</h1>
          </Box>
        </Box>
    </>
  )
}
