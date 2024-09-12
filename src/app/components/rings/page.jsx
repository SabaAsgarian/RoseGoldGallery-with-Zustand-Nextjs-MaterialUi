"use client"
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import PrimarySearchAppBar from '../header'; // Adjust the path as necessary
import MultiActionAreaCard from '../card'; // Updated import to use MultiActionAreaCard
import ring from '../img/ring.jpg'
import Image from 'next/image';
import  useStore  from './../../store' ;
import Footer from './../footer'
import CustomizedBreadcrumbs from './../bradcrumbs'
import { Box } from '@mui/material';
async function getData() {
  const res = await fetch('https://66d85c8037b1cadd8054668b.mockapi.io/Rings');
  if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText); // Improved error message
  }
  return res.json();
}

export default function ringsPage() {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading
  const {addProduct} = useStore()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth); // Update width on resize
    window.addEventListener('resize', handleResize); // Add event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading message

  return (
    <div>
      <PrimarySearchAppBar />
      <h1>Rings</h1>
      <div style={{ display: 'flex', justifyContent: 'center' , marginBottom:'3%'}}>
        <Image src={ring} layout="responsive"  alt='ring' priority />
      </div>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
       <CustomizedBreadcrumbs/>
      </Box>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: windowWidth < 600 ? '75%' : windowWidth < 1024 ? '90%' : '75%', margin: '5% auto' }}>
        {data.length > 0 ? (
          data.map(item => (
            <div key={item.id} style={{ 
              flex: windowWidth < 600 ? '1 0 100%' : windowWidth < 1024 ? '1 0 50%' : '1 0 33.33%', // Adjust flex based on screen size
              marginBottom:'5%',
              
            }}>
              <MultiActionAreaCard data={item} />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

