"use client"
import React, { useEffect, useState } from 'react'; 
import PrimarySearchAppBar from '../header'; 
import MultiActionAreaCard from '../card'; 
import Image from 'next/image';
import necklace from '../img/necklace.jpg';
import  useStore  from './../../store' ;
import Footer from './../footer'
import { Box } from '@mui/material';
import CustomizedBreadcrumbs from './../bradcrumbs'
async function getData() {
  const res = await fetch('https://66d85c8037b1cadd8054668b.mockapi.io/necklace');
  if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText);
  }
  return res.json();
}

export default function NecklacePage() { 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); // State for error handling
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const {addProduct} = useStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth); // Update width on resize
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; // Display error message

  return (
    <div>
      <PrimarySearchAppBar />
      <h1>Necklace</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
        <Image src={necklace} layout="responsive" alt='necklace' priority />
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

