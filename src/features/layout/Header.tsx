import { Box } from '@mui/system';
import React from 'react';

function Header() {
  return (
    <Box className="header" boxShadow={1}>
      <img src="/images/logo.png" height="100%"/>
    </Box>
  );
}

export default Header;
