import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Index'
import EtudiantList from './EtudiantList'

export default function Etudiants() {
    return (
        <>
            <Navbar />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   <EtudiantList />
                </Box>
            </Box>
        </>
    )
}
