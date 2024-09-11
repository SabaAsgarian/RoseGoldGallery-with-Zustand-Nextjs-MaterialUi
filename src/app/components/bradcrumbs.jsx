"use client "
import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
       
        <StyledBreadcrumb
          component="a"
          href="./shop"
          label="All"
         
        />
       
        <StyledBreadcrumb
          component="a"
          href="./bracelet"
          label="Bracelet"
         
        />
    
        <StyledBreadcrumb
          component="a"
          href="./earings"
          label="Earings"
          
        />
      
        <StyledBreadcrumb
          component="a"
          href="./rings"
          label="Rings"
       
        />
      
        <StyledBreadcrumb
          component="a"
          href="./necklace"
          label="Necklace"
         
        />
        
    
       
      </Breadcrumbs>
    </div>
  );
}