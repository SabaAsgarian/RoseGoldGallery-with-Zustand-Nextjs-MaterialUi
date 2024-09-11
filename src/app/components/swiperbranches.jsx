"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import './styles.css';
import Image from 'next/image';
// import required modules

import a from '../components/img/wash.jpg'
import b from '../components/img/sand.jpg'
import c from '../components/img/san.jpeg'
import d from '../components/img/new.jpg'
import e from '../components/img/la.jpg'
import f from '../components/img/alas.jpg'
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
     
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={a} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={b} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={c} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={d} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={e} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={f} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={b} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={c} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={d} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={e} alt='img' />
        </SwiperSlide>
        <SwiperSlide>
             <Image src={f} alt='img' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
