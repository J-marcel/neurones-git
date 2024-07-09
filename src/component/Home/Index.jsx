import { Box, Stack, Grid, Typography, Card, CardContent } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from './../Navbar/Index';
import './../Style/Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from './../Accordion/AccordionDash';
// import { Bar} from '../Charts/Bar';
import Bar from './../Charts/Bar';

export default function Home() {
  return (
    <>
      <div className='bgcolor'>
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              {/* Left section */}
              <Grid item xs={12} md={4}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: '49%', height: 150 }} className='gradient'>
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
                  <Card sx={{ minWidth: '49%', height: 150 }} className='gradientlight'>
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
              <Grid item xs={12} md={4}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: '49%', height: 150 }} className='gradient'>
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
                  <Card sx={{ minWidth: '49%', height: 150 }} className='gradientlight'>
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

              {/* Right section */}
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Card sx={{ minWidth: 345 }} className='gradientlight'>
                    <Stack spacing={2} direction="row" sx={{ color: "#ffffff" }}>
                      <div className='iconstyle'>
                        <StorefrontIcon />
                      </div>
                      <div className='paddingall'>
                        <span className="pricetitle">200K</span>
                        <br />
                        <span className="pricesubtitle">Total</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ minWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className='iconstyleblack'>
                        <StorefrontIcon />
                      </div>
                      <div className='paddingall'>
                        <span className="pricetitle" id='pricetitle'>200K</span>
                        <br />
                        <span className="pricesubtitle">Total</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            {/* Bottom section */}
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: '60vh' }}>
                  <CardContent>
                    <Bar />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '60vh' }}>
                  <CardContent>
                    <div className='paddingall'>
                      <Typography variant="h6" sx={{ color: "#000000" }}>
                        Popular Products
                      </Typography>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
