"use client"
import React from 'react'
import PrimarySearchAppBar from '../header'
import Footer from '../footer'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Image from 'next/image'

import rin from '../img/fring.jpg'
import nec from '../img/fnec.jpg'
import brac from '../img/fbrac.jpg'
import eari from '../img/fear.jpg'
import All from '../img/all.jpeg'
import CustomizedBreadcrumbs from './../bradcrumbs'


export default function page() {
  return (
    <>
    <PrimarySearchAppBar/>
    <h1>All</h1>
      <div style={{ display: 'flex', justifyContent: 'center' , marginBottom:'3%'}}>
        <Image src={All} layout="responsive"  alt='all' priority />
      </div>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
       <CustomizedBreadcrumbs/>
      </Box>
     
    <Grid container spacing={5} sx={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '0 auto'}}>
          {/* Ring */}
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Link href="../components/rings" passHref>
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
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Link href="../components/necklace" passHref>
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
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Link href="../components/bracelet" passHref>
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
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Link href="../components/earings" passHref>
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
     
    <Footer/>
    </>
  )
}
