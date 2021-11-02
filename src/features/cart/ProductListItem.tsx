import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { CartItem } from '../../app/types';
import { getProductById } from '../products/productSlice';
import ProductCartActions from './ProductCartActions';

function ProductListItem({cart_item,show_actions = true}:Props) {

    let product = useAppSelector(getProductById(cart_item.product_id));
    if(!product) return null;

    let total_price = product ? product.price * cart_item.quantity : 0;

  return (
    <Card sx={{display:'grid',gridTemplateColumns:'100px 1fr'}}>
        <CardMedia
      component="img"
      height="100"
      image={product.image}
      alt={product.name}/>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography sx={{fontWeight:500}}>
                  {product.name} - £{product.price} x {cart_item.quantity}
              </Typography>
              <Typography>
                  £{total_price.toFixed(2)}
              </Typography>
          </Box>
         
      
          {show_actions && <Box>
              <ProductCartActions product={product} cart_item={cart_item} />
          </Box>}
      </CardContent>
      
      
    </Card>
  );
}

export default ProductListItem;

interface Props{
    cart_item:CartItem,
    show_actions?:boolean
}
