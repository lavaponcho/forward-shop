import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../app/types';
import { getCartItems } from './cartSlice';
import ProductListItem from './ProductListItem';

function ProductList({items,show_actions = true}:Props) {


  return (
    <Box sx={{display:'grid',gridTemplateColumns:'1fr',gap:'1rem'}}>
        {items.map((item)=>{
            return <ProductListItem key={item.product_id} cart_item={item} show_actions={show_actions}/>
        })}
        {items.length == 0 && 
        <Card>
          <CardContent sx={{textAlign:'center'}}>Your Cart Is Empty!</CardContent>
          </Card>}
    </Box>
  );
}

export default ProductList;

interface Props{
  items:CartItem[],
  show_actions?:boolean
}
