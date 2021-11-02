import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Cart from '../cart/Cart';
import Checkout from '../checkout/Checkout';
import Order from '../order/Order';
import ProductGrid from '../products/ProductGrid';

function Page() {
  return (
    <Box sx={{
        height:'100%',
        width:'100%'
    }}>
      
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Box className="page-layout" sx={{
                  height:'100%',
                  width:'100%'
                  }}>
                    <ProductGrid/>
                    <Cart/>
                    <Checkout/>
                </Box>
            </Route>
            <Route exact path="/order">
              <Box className="page-layout" sx={{
                  height:'100%',
                  width:'100%',
                  display:'flex',
                  justifyContent:'center'
                  }}>
                    <Order/>
                </Box>
            </Route>
          </Switch>
            
        </Container>
    </Box>
  );
}

export default Page;