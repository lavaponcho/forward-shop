import { Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import ProductList from '../cart/ProductList';
import { getOrderItems, getPaymentDetails, processContinueShopping } from './orderSlice';

function Order() {
    let order_items = useAppSelector(getOrderItems);
    let payment_details = useAppSelector(getPaymentDetails);
    let history = useHistory();
    let dispatch = useDispatch();

    let name = payment_details ? payment_details.first_name+ " " + payment_details.last_name : "";

    function continueShopping(){
        dispatch(processContinueShopping());
        history.push("/");
    }

  return (
      <div className="order-layout">
        <Card sx={{
            
        }}>
            <CardHeader title="Order Complete" sx={{textAlign:'center'}}/>
                <Divider/>
            <CardContent>
            <Typography variant="body1" sx={{textAlign:'center'}}>Thank You {name} for your order! an email confirmation has been sent to {payment_details?.email_address}</Typography>

                <ProductList items={order_items} show_actions={false}/>

            </CardContent>

            <Divider/>
            <CardActions>
                <Button fullWidth variant="contained" onClick={()=>continueShopping()}>Continue Shopping</Button>
            </CardActions>
        </Card>
    </div>
  );
}

export default Order;
