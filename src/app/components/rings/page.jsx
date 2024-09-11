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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '75%', margin: '0 auto' }}>
        {/* Map over the data to render MultiActionAreaCard components */}
        {data && data.length > 0 ? (
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

