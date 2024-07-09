import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'

export default function Stagiaires() {
    return (
        <>
            <Navbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Stagiaires</h1>
                </Box>
            </Box>
        </>
    )
}
