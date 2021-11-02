import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { getCartItems, getTotalCartAmount } from './cartSlice';
import ProductList from './ProductList';

function Cart() {
  let cart_total = useAppSelector(getTotalCartAmount);
  let cart_items = useAppSelector(getCartItems);
  return (
    <Box sx={{gridArea:'cart'}}>
    <Card>
      <CardHeader title="Your Cart" sx={{textAlign:'center'}}/>
      <Divider/>
      
      <CardContent>
        <ProductList items={cart_items}/>
      </CardContent>
      <Divider/>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <Button sx={{fontWeight:600}}>Total £{cart_total}</Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default Cart;
