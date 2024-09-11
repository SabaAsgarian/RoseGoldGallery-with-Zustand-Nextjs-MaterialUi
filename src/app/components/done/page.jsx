'use client'
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import PrimarySearchAppBar from '../header';
import Image from 'next/image';
import NestedModal from "./../modal"
import useStore from './../../store';
import Footer from './../footer'
import { Box } from '@mui/material';
import CustomizedBreadcrumbs from './../bradcrumbs'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function page() {
    return (
        <>
            <PrimarySearchAppBar />
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
                <CustomizedBreadcrumbs />
            </Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
            <Stack sx={{ width: '50%' }} spacing={2} >
                <Alert variant="outlined" severity="success" sx={{backgroundColor:'#edf7ed'}}>
                    Your Payment Was Succesful. <br />
                    Your Order Will Be On The Way Soon. <br />
                    Thank You For Shopping With Us.
                </Alert>

            </Stack>
            </Box>
            <Footer />
        </>
    )
}


