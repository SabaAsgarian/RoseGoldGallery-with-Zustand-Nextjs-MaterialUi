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
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with a default value
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
    setWindowWidth(window.innerWidth); // Update state on client
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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '75%', margin: '0 auto' }}>
        {data.length > 0 ? (
          data.map(item => (
            <div key={item.id} style={{ 
              flex: windowWidth < 1024 ? '1 0 100%' : '1 0 30%', 
              margin: '10px' 
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

