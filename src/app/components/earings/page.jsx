"use client"
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import PrimarySearchAppBar from '../header'; // Adjust the path as necessary
import MultiActionAreaCard from '../card'; // Updated import to use MultiActionAreaCard
import Image from 'next/image';
import earings from '../img/earing.jpg'
import  useStore  from './../../store' ;
import Footer from './../footer'
import { Box } from '@mui/material';
import CustomizedBreadcrumbs from './../bradcrumbs'
async function getData() {
  const res = await fetch('https://66d8636f37b1cadd805483c8.mockapi.io/earings');
  if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText);
  }
  return res.json();
}

export default function EarringsPage() { // Change the function name to match the file
  const [data, setData] = useState([]); // Initialize state for data
  const [loading, setLoading] = useState(true); // Initialize state for loading
  const {addProduct} = useStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>; // Display loading message if data is loading

  return (
    <div>
      <PrimarySearchAppBar />
      <h1>Earings</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
        <Image src={earings} layout="responsive" alt='necklace' priority /> {/* Added priority */}
      </div>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
       <CustomizedBreadcrumbs/>
      </Box>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',alignItems:'center', width: '75%', margin: '0 auto' }}>
        {data.length > 0 ? (
          data.map(item => (
            <div key={item.id} style={{ 
              flex: window.innerWidth < 1024 ? '1 0 100%' : '1 0 30%', // Adjust flex based on screen size
              margin: '10px' 
            }}> {/* Each card takes up 30% of the row */}
              <MultiActionAreaCard data={item} />
            </div>
          ))
        ) : (
          <p>No data available</p> // Message if no data
        )}
      </div>
      <Footer/>
    </div>
  );
};

