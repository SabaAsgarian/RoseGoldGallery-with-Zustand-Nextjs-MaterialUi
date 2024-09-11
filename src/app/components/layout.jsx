"use client"
import React from 'react';
import PrimarySearchAppBar from './header';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
 
          {children}
      
      </body>
    </html>
  );
}