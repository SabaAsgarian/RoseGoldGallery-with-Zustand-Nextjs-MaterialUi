"use client"
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import PrimarySearchAppBar from '../header'; // Adjust the path as necessary
// Updated import to use MultiActionAreaCard
import Image from 'next/image';
import NestedModal from "./../modal"
import useStore from './../../store';
import Footer from './../footer'
import { Box } from '@mui/material';
import CustomizedBreadcrumbs from './../bradcrumbs'
export default function page() {
    const [userData, setUserData] = useState(null);
    const para = () => {
        const url = new URL('https://66b9e0c8fa763ff550f9f4a9.mockapi.io/admin');
        url.searchParams.append('email', email);
        url.searchParams.append('pass', password);

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            })
            .then(tasks => {
                console.log(tasks);
                // Assuming you have setStatus and setData defined
                setStatus(!status);
                setData(tasks);
                // Redirect to account page
                // Use Link from 'next/link' to navigate
            })
            .catch(error => {
                // handle error
            });
    };

    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            setUserData(JSON.parse(data)); // Retrieve and parse the data
        }
    }, []);

    return (
        <>
             <PrimarySearchAppBar /> 
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
                <CustomizedBreadcrumbs />
            </Box>

            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>

                {userData && (
                    <Box style={{ width: { xs: '95%', sm: '95%', md: '85%', lg: '55%' },backgroundColor:'#f1eee4',padding:'20px',borderRadius:'10px'}}>
                        <div><h1>Welcome back</h1>{userData.email}!</div>
                        <div>Your password is: {userData.password}</div> {/* Display password if needed */}
                        {/* Display password if needed */}
                    </Box>
                )}
            </Box>
            <Footer />

        </>
    )
}
