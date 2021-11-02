import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product } from '../../app/types';
import { addProductToCart, getCartItemByProductId } from '../cart/cartSlice';
import ProductCartActions from '../cart/ProductCartActions';

function ProductItem({product}:Props) {
  let dispatch = useAppDispatch();
  let cart_item = useAppSelector(getCartItemByProductId(product.id));
  return (
      <Card className="product">
        
      <CardMedia
      component="img"
      className="product-image"
      image={product.image}
      alt={product.name}/>
      <CardContent>
        <Box sx={{display:'grid',gridTemplateColumns:'1fr auto'}}>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography component="div">
            £{product.price}
          </Typography>
        </Box>
        
      </CardContent>
      <Divider/>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        {cart_item ? 
        <ProductCartActions product={product} cart_item={cart_item}/>:
        <Button fullWidth variant="contained" onClick={()=>dispatch(addProductToCart(product.id))}>Add To Cart</Button>
        }
      </CardActions>
    </Card>
  );
}

export default ProductItem;

interface Props{
    product:Product
}
