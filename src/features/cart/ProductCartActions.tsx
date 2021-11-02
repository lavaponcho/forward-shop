import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { CartItem, Product } from '../../app/types';
import { decreaseProductQuantity, increaseProductQuantity, removeProductTFromCart } from './cartSlice';

function ProductCartActions({product,cart_item}:Props) {

    let dispatch = useAppDispatch();
    if(!product || !cart_item) return null;

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <Button color="error" onClick={() => dispatch(removeProductTFromCart(product.id))}>Remove</Button>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained" sx={{padding:'0px',width:'30px',height:'30px',minWidth:'30px'}} onClick={() => dispatch(decreaseProductQuantity(product.id))}>-</Button>
            <Typography sx={{margin:'0px 1rem'}}>{cart_item.quantity}</Typography>
            <Button size="small" variant="contained" sx={{padding:'0px',width:'30px',height:'30px',minWidth:'30px'}} onClick={() => dispatch(increaseProductQuantity(product.id))}>+</Button>
        </Box>
    </Box>
  );
}

export default ProductCartActions;

interface Props{
    product:Product,
    cart_item:CartItem
}