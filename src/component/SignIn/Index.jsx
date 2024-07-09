import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'
import { Box } from '@mui/material'

export default function Signin() {
    return (

        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Signin</h1>
                </Box>
            </Box>
        </>

    )
}
