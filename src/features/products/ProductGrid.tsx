import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import ProductItem from './ProductItem';
import { getProducts } from './productSlice';

function ProductGrid() {

    let products = useAppSelector(getProducts);

  return (
    <Box sx={{gridArea:'products'}}>
        <Grid container spacing={4}>
            {products.map((product)=>{
                return <Grid key={product.id} item xs={12} sm={6} md={3}>
                            <ProductItem key={product.id} product={product}/>
                        </Grid>
            })}
            
        </Grid>
    </Box>
  );
}

export default ProductGrid;
