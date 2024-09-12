"use client"
import { Box } from "@mui/material"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import logO from './img/logo2.png'
import Image from "next/image";
import Typography from "@mui/material/Typography";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Me from './img/me.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Link from "next/link";
import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f9f9f9',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    boxShadow: 'none', // {{ edit_1 }} Remove box shadow
    ...theme.applyStyles('dark', {
        backgroundColor: '#f9f9f9',
    }),
}));

export default function footer() {
    return (
        <>
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'start', alignItems: 'start', backgroundColor: '#f9f9f9', marginTop: '10%', color: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%',  marginLeft: '5%', marginTop:'5%' }}> {/* Changed to column */}
              
            <Link href="/" style={{   textDecoration: 'none' }}>
            <Image 
                        src={logO} 
                        alt="Logo" 
                        priority 
                        width={550} 
                        height={150} 
                        style={{ width: '100%', maxWidth: '550px', height: 'auto' , marginBottom:'10%' }} // {{ edit_1 }} Responsive styling
                    /> 
            </Link>

                    {/* New Box for Return Policy and Warranty */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', height: '100px', backgroundColor: 'transparent', color: 'black' ,marginBottom:'7%',marginTop:'5%',textAlign: "center" }}> {/* Main container for two boxes */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '25%' }}> {/* First box */}
                            <AssignmentReturnedOutlinedIcon  sx={{fontSize:'40px',boxShadow:'1px 1px 100px 0px #c6a55f inset',borderRadius:"50%"}} /> {/* Icon */}
                            <Typography variant="body1" sx={{ marginTop: 1 }}>Return Policy After a Month</Typography> {/* Text */}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '25%', textAlign: "center"}}> {/* First box */}
                            <RedeemOutlinedIcon  sx={{fontSize:'40px',boxShadow:'1px 1px 100px 0px #c6a55f inset',borderRadius:"50%"}} /> {/* Icon */}
                            <Typography variant="body1" sx={{ marginTop: 1 }}>Sending multiple products at the same time</Typography> {/* Text */}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '25%' }}> {/* Second box */}
                            <GppGoodOutlinedIcon  sx={{fontSize:'40px',boxShadow:'1px 1px 100px 0px #c6a55f inset',borderRadius:"50%"}}  /> {/* Icon */}
                            <Typography variant="body1">Forever Warranty</Typography> {/* Text */}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '25%' }}> {/* Second box */}
                            <ChangeCircleOutlinedIcon sx={{fontSize:'40px',boxShadow:'1px 1px 100px 0px #c6a55f inset',borderRadius:"50%"}} /> {/* Icon */}
                            <Typography variant="body1">Exchange Up To A week</Typography> {/* Text */}
                        </Box>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 3, sm: 2, md: 4 ,lg:10}}
                    >
                        <Item><a href="#link1" style={{ color: 'black', textDecoration: 'none', textAlign: 'start' }}>
                            <h1>for you</h1>

                            <p className="p-hover"  style={{}}>Cooperation with Rose</p>
                            <p className="p-hover"  style={{}}>Grant of representation</p>
                            <p className="p-hover"  style={{}}>Frequently asked questions</p>
                            <p className="p-hover"  style={{}}>Be Gold Campaign</p>


                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'black', textDecoration: 'none', textAlign: 'start' }}>
                            <h1>guide</h1>

                            <p className="p-hover"  style={{}}>How to order and pay</p>
                            <p className="p-hover"  style={{}}>Delivery of orders</p>
                            <p className="p-hover"  style={{}}>Exchanges and returns</p>
                            <p className="p-hover"  style={{}}>Terms of use and user privacy</p>
                            <p className="p-hover" >Sizing guide</p>


                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'black', textDecoration: 'none', textAlign: 'start' }}>
                            <h1>Rose GoldGallery</h1>

                            <p className="p-hover"  style={{}}>About Rose</p>
                            <p className="p-hover"  style={{}}>branches</p>
                            <p className="p-hover"  style={{}}>blog</p>
                            <p className="p-hover"  style={{}}>Contact us</p>


                        </a></Item>
                    </Stack>
                    <Box sx={{ width: '100%', my: '5%' }}>
                        <Stack spacing={2}>
                            <Item>
                                <Image src={Me} alt="me" width={100} height={100} style={{borderRadius:'50%' ,backgroundColor:'#c9a659'}} />
                                Developed by saba asgarian
                                <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr'>
                                    <InstagramIcon sx={{ color: 'black', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                                    <LinkedInIcon sx={{ color: 'black', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='https://github.com/SabaAsgarian'>
                                    <GitHubIcon sx={{ color: 'black', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                                <Link href='mailto:computer.sabaa@gmail.co'>
                                    <MailIcon sx={{ color: 'black', ml: '2%' }} /> {/* Set color here */}
                                </Link>
                            </Item>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </>
    )
}