import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Header from './features/layout/Header';
import { Box } from '@mui/system';
import Page from './features/layout/Page';

function App() {
  return (
      <Box sx={{
        display:'grid',
        gridTemplateColumns:'1fr',
        gridTemplateRows:'70px 1fr',
        gap:'1rem',
        width:'100%',
        minHeight:'100vh'
      }}>
          <Header/>
          <Page/>
        </Box>
  );
}

export default App;
