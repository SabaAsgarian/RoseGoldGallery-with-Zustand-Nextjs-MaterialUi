"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import a from './img/1.jpg'
import b from './img/2.jpg'
import c from './img/3.jpg'
import d from './img/4.jpg'
import e from './img/5.jpg'
import f from './img/6.jpg'
import g from './img/7.jpg'
import h from './img/8.jpg'
import i from './img/9.jpg'
import j from './img/10.jpg'
import k from './img/11.jpg'
import l from './img/12.jpg'
import m from './img/13.jpg'
import n from './img/14.jpg'
import Link from 'next/link';

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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={a} 
              alt="a" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_1 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={b} 
              alt="b" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_2 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={c} 
              alt="c" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_3 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/rings" passHref>
            <Image 
              src={d} 
              alt="d" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_4 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={e} 
              alt="e" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_5 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={f} 
              alt="f" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_6 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={g} 
              alt="g" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_7 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/rings" passHref>
            <Image 
              src={h} 
              alt="h" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_8 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/bracelet" passHref>
            <Image 
              src={i} 
              alt="i" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_9 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/rings" passHref>
            <Image 
              src={j} 
              alt="j" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_10 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/earings" passHref>
            <Image 
              src={k} 
              alt="k" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_11 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/necklace" passHref>
            <Image 
              src={l} 
              alt="l" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_12 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/bracelet" passHref>
            <Image 
              src={m} 
              alt="m" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_13 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="./components/bracelet" passHref>
            <Image 
              src={n} 
              alt="n" 
              layout="responsive" 
              priority 
              className="image-hover" // {{ edit_14 }} Added hover class
              style={{ border: '1px solid black' }} 
            />
          </Link>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
