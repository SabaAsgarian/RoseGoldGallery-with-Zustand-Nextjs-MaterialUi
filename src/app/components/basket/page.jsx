"use client"
import React, { useEffect, useState } from 'react'; 
import PrimarySearchAppBar from '../header'; 
import  useStore  from './../../store' ;

import Table from '@mui/material/Table'; // Add these imports
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import Image from 'next/image';
import load from '../img/load.gif'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
 // Import useRouter for navigation
import Link from 'next/link'; // Import Link for navigation
import { Box } from '@mui/material';
import CustomizedBreadcrumbs from "./../bradcrumbs"
import NestedModal from "./../modal"


const PayButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgray',
  },
});

export default function BasketPage() { 
 // Initialize router
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with a default value
  const {products , plusFromCart,minusFromCart,num, totalPrice} = useStore()
  const [isClient,setIsClient] = useState(false);
  const totallPrice = products.reduce((acc, product) => acc + product.price * product.count, 0); 

  console.log(products);
 
  useEffect(() => {
    setIsClient(true);
    totalPrice();
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if(!isClient){
    return(
      <Image src={load} alt='load' style={{ width: '100%', height: 'auto' }}/>
    )
  }
  return (
    <>
      <PrimarySearchAppBar /> 
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '60%', margin: '5% auto' }}>
       <CustomizedBreadcrumbs/>
      </Box>
      <TableContainer component={Paper}> 
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={8}> 
                Product Details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>count</TableCell>
              <TableCell>Add</TableCell>
              <TableCell>Remove</TableCell>
              <TableCell>Total</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((val) => ( // Use products to populate the table
              <TableRow key={val.id}>
                <TableCell>{val.id}</TableCell>
                <TableCell>
                  <img src={val.img} alt={val.title} style={{ width: '50px', height: '50px' ,border:'1px solid black',borderRadius:'50%',backgroundColor:'#d2c9a9' }} /> 
                </TableCell>
                <TableCell>{val.title}</TableCell>
                <TableCell align="left">{val.price}$</TableCell>
                <TableCell align="left">{val.count}</TableCell>
                <TableCell align="left">
                  <button onClick={()=>{
                                plusFromCart(val.id);
                                totalPrice()
                            }} style={{display:'flex', justifyContent:'center',backgroundColor:'transparent',border:'0px'}}>
                  <AddCircleOutlineIcon/>
                  </button>
                </TableCell>
                <TableCell align="left">
                  <button onClick={()=>{
                                minusFromCart(val.id)
                                totalPrice()
                            }} style={{display:'flex', justifyContent:'center',backgroundColor:'transparent',border:'0px'}}>
                  <RemoveCircleOutlineIcon/>
                  </button>
                </TableCell>
                <TableCell align="left">{val.price * val.count}$</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h3 > -Total Price Of Your Shopping Is: {num}$</h3>
      
        <Stack spacing={2} direction="row">
          <NestedModal/>
          <Link href='./shop'>
          <Button sx={{backgroundColor:'white',color:'black',border:'2px solid black',height:'50px' ,width:'300px',marginBottom:'20%'}}>Continue To Shop</Button>
          </Link>
        </Stack>
      </TableContainer>
      
    </>
  );
};
