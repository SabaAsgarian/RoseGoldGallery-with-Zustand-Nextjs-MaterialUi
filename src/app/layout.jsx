"use client"

import PrimarySearchAppBar from './components/header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        {children} 
      </body>
    </html>
  );
}