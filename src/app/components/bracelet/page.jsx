"use client"
import React, { useEffect, useState } from 'react'; 
import PrimarySearchAppBar from '../header'; 
import MultiActionAreaCard from '../card'; 
import brace from '../img/brace.jpg';
import Image from 'next/image';
import  useStore  from './../../store' ;
import Footer from './../footer'
import CustomizedBreadcrumbs from './../bradcrumbs'
import { Box } from '@mui/material';

async function getData() {
  const res = await fetch('https://66d8636f37b1cadd805483c8.mockapi.io/bracelet');
  if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText);
  }
  return res.json();
}

export default function BraceletPage() { 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [windowWidth, setWindowWidth] = useState(0); // State for window width
  const {addProduct} = useStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();

    // Update window width on client
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <PrimarySearchAppBar />
      <h1>Bracelet</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
        <Image src={brace} layout="responsive" alt='bracelet' priority />
      </div>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
       <CustomizedBreadcrumbs/>
      </Box>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '75%', margin: '5% auto' }}>
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

