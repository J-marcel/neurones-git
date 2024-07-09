import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from './../Navbar/Index';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import './../Style/Dash.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { GeoChart } from '../Charts/GeoChart';

export default function Analytics() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Stack spacing={2} >

                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                500K
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                500K
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2} >
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                900K
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                900K
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>

                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + 'vh' }}>
                                    <CardContent>
                                        <GeoChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </div>

        </>
    )
}
