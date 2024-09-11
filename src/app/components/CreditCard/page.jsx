"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import cart from '../img/5.jpeg'
import Image from 'next/image';
import  useStore  from './../../store' ;
import BasketPage from '../basket/page';
import Link from 'next/link';

export default function CreditCardForm() {
  // Initialize totalPrice state
  const {num, totalPrice} = useStore()
  const {addProduct} = useStore()
  useEffect(() => {
   
    totalPrice();
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };}, []);

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ccv, setCcv] = useState('');
 

  const cardRefs = [useRef(), useRef(), useRef(), useRef()];
  const nameRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const ccvRef = useRef();
  const btnRef = useRef();


  const handleCardNumberChange = (index, value) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value.slice(0, 4);
    setCardNumber(newCardNumber);

    if (value.length >= 4 && index < 3) {
      cardRefs[index + 1].current.focus();
    } else if (index === 3 && value.length >= 4) {
      nameRef.current.focus();
    }
  };

  const handleNameChange = (value) => {
    setName(value.slice(0, 20));
    if (value.length >= 20) {
      monthRef.current.focus();
    }
  };

  const handleMonthChange = (value) => {
    setMonth(value.slice(0, 2));
    if (value.length >= 2) {
      yearRef.current.focus();
    }
  };

  const handleYearChange = (value) => {
    setYear(value.slice(0, 2));
    if (value.length >= 2) {
      ccvRef.current.focus();
    }
  };

  const handleCcvChange = (value) => {
    setCcv(value.slice(0, 4));
    if (value.length >= 4) {
      btnRef.current.focus();
    }
  };
 

  const handleSubmit = () => {
    alert('Your Payment was Successfull');
    window.location.href = '../components/done';
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, boxShadow: 3 }}>
      <h3 > -Total Price Of Your Shopping Is: {num}$</h3>
      <h4>To Rose Gold Gallery Account</h4>
        <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
          <Image
            src={cart}
            alt="Credit Card Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
          />

          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
              {cardNumber.join(' - ')}
            </Typography>
            <Typography variant="h6" sx={{ ml: 2 }}>
              {name || 'Name'}
            </Typography>
            <Grid container spacing={2} sx={{ ml: 2 }}>
              <Grid item xs={2}>
                <Typography variant="body1">{month || 'mm'}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">/ {year || 'yy'}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" align="left">
                  {ccv || 'ccv'}
                </Typography>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">Card Number</Typography>
          <Grid container spacing={1}>
            {cardNumber.map((num, index) => (
              <Grid item xs={3} key={index}>
                <TextField
                  inputRef={cardRefs[index]}
                  fullWidth
                  variant="outlined"
                  value={num}
                  placeholder='0000'
                  onChange={(e) => handleCardNumberChange(index, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">Card Holder Name</Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={name}
            placeholder='John Doe'
            onChange={(e) => handleNameChange(e.target.value)}
            inputRef={nameRef}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography variant="body2">Month</Typography>
              <TextField
                variant="outlined"
                value={month}
                onChange={(e) => handleMonthChange(e.target.value)}
                placeholder='12'
                inputRef={monthRef}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">Year</Typography>
              <TextField
                variant="outlined"
                value={year}
                onChange={(e) => handleYearChange(e.target.value)}
                placeholder='12'
                inputRef={yearRef}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">CCV</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={ccv}
                placeholder='0000'
                onChange={(e) => handleCcvChange(e.target.value)}
                inputRef={ccvRef}
              />
            </Grid>
          </Grid>
        </Box>
        <Link  href="../components/done"
        >
        <Button
          fullWidth
          variant="contained"
         
          sx={{ mt: 3 ,backgroundColor:'black',color:'white'}}
          onClick={handleSubmit}
          ref={btnRef}
        >
          Submit
        </Button>
        </Link>
      </Box>
    </Container>
  );
};
