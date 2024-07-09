import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'
export default function ErrorPage() {
    return (
        <>
        <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Sidebar />
                    <h1>Error</h1>
                </Box>
            </Box>
        </>
    )
}
