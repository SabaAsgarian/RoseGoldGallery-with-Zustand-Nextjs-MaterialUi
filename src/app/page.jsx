"use client"
import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Image from 'next/image'
import gif from './components/img/vid.gif'
import rin from './components/img/rin.jpg'
import nec from './components/img/neck.jpg'
import brac from './components/img/brac.jpg'
import eari from './components/img/ear.webp'
import PrimarySearchAppBar from './components/header'
import left from './components/img/homeleft.jpg'
import right from './components/img/homeright.jpg'
import Swiper from './components/swiper'
import last from './components/img/last.webp'
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import Footer from './components/footer'
import Swiperbranches from './components/swiperbranches'
export default function Page() {
  return (
    <>
      <PrimarySearchAppBar /> {/* Moved to the top */}
      <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <Box sx={{width:'100%',height:'100%'}}>
       <Link href="./components/shop" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>
          <Image src={gif} alt="GIF" style={{width:'100%' , height:'auto'}}/> {/* Full width GIF */}
        </Link>
       </Box>

        {/* Grid for images */}
        <Grid container spacing={0} sx={{ marginTop: 2 }}>
          {/* Ring */}
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Link href="./components/rings" passHref>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid black',
                  position: 'relative',
                  '&:hover': {
                    filter: 'brightness(0.8)', // Decrease brightness of the image
                    '& .caption': { // Target the caption on hover
                      backgroundColor: 'black', // Change background color
                      color: 'white', // Change text color
                      border: '1px solid white' // Change border color
                    }
                  }
                }}
              >
                <Image src={rin} alt="Rings" layout="responsive" />
                <Box
                  className="caption" // Add a class to target in hover
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    backgroundColor: 'transparent', // Initial background
                    color: 'black', // Initial text color
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Rings
                </Box>
              </Box>
            </Link>
          </Grid>
          {/* Necklace */}
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Link href="./components/necklace" passHref>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid black',
                  position: 'relative',
                  '&:hover': {
                    filter: 'brightness(0.8)', // Decrease brightness of the image
                    '& .caption': { // Target the caption on hover
                      backgroundColor: 'black', // Change background color
                      color: 'white', // Change text color
                      border: '1px solid white' // Change border color
                    }
                  }
                }}
              >
                <Image src={nec} alt="Necklace" layout="responsive" />
                <Box
                  className="caption" // Add a class to target in hover
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    backgroundColor: 'transparent', // Initial background
                    color: 'black', // Initial text color
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Necklace
                </Box>
              </Box>
            </Link>
          </Grid>
          {/* Bracelet */}
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Link href="./components/bracelet" passHref>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid black',
                  position: 'relative',
                  '&:hover': {
                    filter: 'brightness(0.8)', // Decrease brightness of the image
                    '& .caption': { // Target the caption on hover
                      backgroundColor: 'black', // Change background color
                      color: 'white', // Change text color
                      border: '1px solid white' // Change border color
                    }
                  }
                }}
              >
                <Image src={brac} alt="Bracelet" layout="responsive" />
                <Box
                  className="caption" // Add a class to target in hover
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    backgroundColor: 'transparent', // Initial background
                    color: 'black', // Initial text color
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Bracelet
                </Box>
              </Box>
            </Link>
          </Grid>
          {/* Earrings */}
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Link href="./components/earings" passHref>
              <Box
                sx={{
                  cursor: 'pointer',
                  border: '1px solid black',
                  position: 'relative',
                  '&:hover': {
                    filter: 'brightness(0.8)', // Decrease brightness of the image
                    '& .caption': { // Target the caption on hover
                      backgroundColor: 'black', // Change background color
                      color: 'white', // Change text color
                      border: '1px solid white' // Change border color
                    }
                  }
                }}
              >
                <Image src={eari} alt="Earrings" layout="responsive" />
                <Box
                  className="caption" // Add a class to target in hover
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60px',
                    backgroundColor: 'transparent', // Initial background
                    color: 'black', // Initial text color
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Earrings
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>



          <Link href="./components/necklace" passHref>
            <Box
              sx={{
                cursor: 'pointer',
                border: '1px solid black',
                position: 'relative',
                bgcolor: '#f1eee4cc', // Updated background color
                color: 'black', // Updated text color

              }}
            >
              <Image src={left} alt="Earrings" layout="responsive" />
              <Box
                className="caption" // Add a class to target in hover
                sx={{
                  position: 'absolute',
                  bottom: '15%', // Position for "Shining for You"
                  left: '50%',
                  transform: 'translate(-50%, -50%)', // Center the text
                  width: '100%', // Full width to center text
                  height: '60px',
                  backgroundColor: 'transparent', // Initial background
                  color: 'black', // Initial text color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bolder'
                }}
              >
                Shining for You
              </Box>
              <Box
                className="caption" // Add a class to target in hover
                sx={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '2%',
                  width: 'auto',
                  height: '60px',
                  backgroundColor: '#f1eee4cc', // Initial background
                  color: 'black', // Initial text color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'black', // Background color on hover
                    color: 'white', // Text color on hover

                  }
                }}
              >
                Shop Our New Earrings
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Link href="./components/earings" passHref>
            <Box
              sx={{
                cursor: 'pointer',
                border: '1px solid black',
                position: 'relative',
                bgcolor: '#f1eee4cc', // Updated background color
                color: 'black', // Updated text color

              }}
            >
              <Image src={right} alt="necklace" layout="responsive" />
              <Box
                className="caption" // Add a class to target in hover
                sx={{
                  position: 'absolute',
                  bottom: '15%', // Position for "Shining for You"
                  left: '50%',
                  transform: 'translate(-50%, -50%)', // Center the text
                  width: '100%', // Full width to center text
                  height: '60px',
                  backgroundColor: 'transparent', // Initial background
                  color: 'black', // Initial text color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bolder'
                }}
              >
                Necklace for You
              </Box>
              <Box
                className="caption" // Add a class to target in hover
                sx={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '2%',
                  width: 'auto',
                  height: '60px',
                  backgroundColor: '#f1eee4cc',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',

                  }
                }}
              >
                Shop Our New Necklaces
              </Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '5%', marginLeft: '3%' }}>
        <Box sx={{ fontWeight: 'bold', color: 'black', marginBottom: 1, fontSize: '25px' }}>
          Our Best Sellers
        </Box>
        <Link href="./components/shop" passHref style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              padding: '2%',
              backgroundColor: 'transparent',
              border: '2px solid black',
              width: '200px',
              height: '60px',
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#faf7f1',
              },
            }}
          >
            Shop
          </Box>
        </Link>
      </Box>
      <Swiper />
      {/* g//////////////////////////////////////////////////////// */}
      <Grid container spacing={0} sx={{ marginTop: '10%',backgroundColor:'#faf7ef' }} className='Last'>
        <Grid item xs={12} md={6} lg={6} xl={6}>




          <Box
            sx={{



              bgcolor: '#faf7ef', // Updated background color
              color: 'black', // Updated text color
              width: '100%', // Full width to center text
              height: '100%',

            }}
          >

            <Box
              // Add a class to target in hover
              sx={{

                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'start',
                alignContent: 'center'
                , textAlign: 'start',
                // Center the text

                width: '100%', // Full width to center text
                height: 'auto',
                backgroundColor: '#faf7ef', // Initial background
                color: 'black', // Initial text color

                marginLeft: '5%',
                paddingTop: '10%',
                paddingBottom: '10%'
              }}
            >
              <h1 style={{ fontSize: '30px', fontWeight: 'bolder', textAlign: 'start' }} className='h1 w-full'>We Design Gold Differently</h1> {/* Updated text alignment */}
             <Box style={{ textAlign: 'start', marginLeft: '0',width:'100%' }}>
             <p className='p' style={{width:'70%'}}>Because beautiful jewelry is an expression of yourself: wear what you want, how you want, or celebrate whenever you want, and keep it forever. These products are for your big moments and everyday use.</p>
             </Box>
              <Box className='listt' style={{ textAlign: 'start', marginLeft: '0' }}> {/* Updated text alignment */}
                <p style={{ fontWeight: 'bolder',width:'100%' }}>High commitment</p>
                <p style={{ fontWeight: 'bolder',width:'100%' }}>Innovation in design</p>
                <p style={{ fontWeight: 'bolder',width:'100%' }}>24 hour response</p>
                <p style={{ fontWeight: 'bolder',width:'100%' }}>sustainability</p>
              </Box>
            </Box>
            <Link href="./components/shop" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>
              <Box
                // Add a class to target in hover
                sx={{


                  marginLeft: '5%',
                  padding: '2%',
                  width: '45%',
                  height: '60px',
                  backgroundColor: 'transparent', // Initial background
                  color: 'black', // Initial text color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid black',
                  '&:hover': {
                    backgroundColor: 'white', // Background color on hover
                    color: 'black', // Text color on hover

                  }
                }}
              >
                Know More About Rose Gold Gallery
              </Box>
            </Link>
          </Box>

        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>

          <Box
            sx={{
              cursor: 'pointer',

              position: 'relative',
              bgcolor: '#f1eee4cc', // Updated background color
              color: 'black', // Updated text color

            }}
          >


            <Image src={last} alt="necklace" layout="responsive" />



          </Box>

        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100px', backgroundColor: 'black', color: 'white' }}> {/* Main container for two boxes */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}> {/* First box */}
          <AssignmentReturnedOutlinedIcon /> {/* Icon */}
          <Typography variant="body1" sx={{ marginTop: 1 }}>Return Policy After a Month</Typography> {/* Text */}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}> {/* Second box */}
          <GppGoodOutlinedIcon /> {/* Icon */}
          <Typography variant="body1">Forever Warranty</Typography> {/* Text */}
        </Box>
      </Box>
      {/* jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '5%', marginLeft: '3%' }}>
        <Box sx={{ fontWeight: 'bold', color: 'black', marginBottom: 5, fontSize: '25px' }}>
          Our Branches
        </Box>
        
      </Box>
      <Swiperbranches style={{marginBottom:'5%',marginTop:'5%'}}/>
      {/* f///////////////////last///////////////////////////// */}
      <Box sx={{margin:'20%'}}>

      </Box>
      <Footer />
    </>
  )
}
