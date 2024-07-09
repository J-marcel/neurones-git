import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'

export default function Setting() {
  return (
    <>
    <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
          <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Setting</h1>
        </Box>
      </Box>
    </>
  )
}