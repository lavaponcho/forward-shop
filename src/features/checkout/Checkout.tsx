import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import InputMask from 'react-input-mask';
import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { CheckoutForm } from '../../app/types';
import { useDispatch } from 'react-redux';
import { completeOrder } from '../order/orderSlice';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { getCartItems } from '../cart/cartSlice';

function Checkout() {
  let dispatch = useDispatch();
  let history = useHistory();
  let cart_items = useAppSelector(getCartItems);
  const [first_name, setFirstName] = useState<string>("");
  const [first_name_error, setFirstNameError] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [last_name_error, setLastNameError] = useState<string>("");
  const [email_address, setEmailAddress] = useState<string>("");
  const [email_address_error, setEmailAddressError] = useState<string>("");
  const [payment_method, setPaymentMethod] = useState<string>("card");

  const [card_number, setCardNumber] = useState<string>("");
  const [card_number_error, setCardNumberError] = useState<string>("");
  const [expiry_date, setExpiryDate] = useState<string>("");
  const [expiry_date_error, setExpiryDateError] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [cvv_error, setCvvError] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let disabledButton = false;

  if(cart_items.length == 0){
    disabledButton = true;
  }

  useEffect(()=>{
    handleValidation();
  },[
    first_name,
    last_name,
    email_address,
    card_number,
    expiry_date,
    cvv
  ])

  function handleValidation(handleRequired = false): boolean{
    let all_passed:boolean = true;
    resetErrors();
      if(!first_name || first_name == ""){
        if(handleRequired){
        setFirstNameError('Please Enter Your First Name')
        all_passed = false;
        }
      }
      if(!last_name || last_name == ""){
        if(handleRequired){
        setLastNameError('Please Enter Your Last Name')
        all_passed = false;
        }
      }
      if(!email_address || email_address == ""){
        if(handleRequired){
        setEmailAddressError('Please Enter Your Email Address')
        all_passed = false;
        }
      }else{
        if(!validator.isEmail(email_address)){
          setEmailAddressError('Please Enter a Vaild Email Address')
          all_passed = false;
        }
      }
      if(payment_method == 'card'){
        if(!card_number || card_number == ""){
          if(handleRequired){
          setCardNumberError('Please Enter Your Card Number')
          all_passed = false;
          }
        }
        if(!expiry_date || expiry_date == ""){
          if(handleRequired){
          setExpiryDateError('Please Enter Your Cards Expiry Date')
          all_passed = false;
          }
        }
        if(!cvv || cvv == ""){
          if(handleRequired){
          setCvvError('Please Enter Your Cards CVV number')
          all_passed = false;
          }
        }
      }
    

    return all_passed;
  }

  function resetErrors(){
    setFirstNameError("");
    setLastNameError("");
    setEmailAddressError("");
    setCardNumberError("");
    setExpiryDateError("");
    setCvvError("");
  }

  function handleCheckout(): void{

    if(handleValidation(true)){
      let payload: CheckoutForm = {
        first_name,
        last_name,
        email_address,
        payment_method,
        card_number,
        expiry_date,
        cvv,
        username,
        password
      }

      dispatch(completeOrder(payload));
      history.push("/order");
    }
  }

  return (
    <Box sx={{gridArea:'checkout'}}>
      <Card>
        <CardHeader title="Checkout" sx={{textAlign:'center'}}/>
        <Divider/>
        <CardContent>
        <TextField fullWidth label="First Name" error={first_name_error ? true : false} helperText={first_name_error} margin="normal" variant="outlined" required value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
        <TextField fullWidth label="Last Name" error={last_name_error ? true : false} helperText={last_name_error} margin="normal" variant="outlined" required value={last_name} onChange={(e) => setLastName(e.target.value)}/>
        <TextField fullWidth label="Email Address" error={email_address_error ? true : false} helperText={email_address_error}  margin="normal" variant="outlined" required value={email_address} onChange={(e) => setEmailAddress(e.target.value)} />
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <FormControl component="fieldset">
            <RadioGroup row aria-label="payment_method" name="row-radio-buttons-group" value={payment_method} onChange={(e) => setPaymentMethod(e.target.value)} >
              <FormControlLabel value="card" control={<Radio />} label="Card" />
              <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
        </FormControl>
        </Box>
        {payment_method == "card" ? 
        <React.Fragment>
          <TextField fullWidth label="Card Number" error={card_number_error ? true : false} helperText={card_number_error}  required margin="normal" variant="outlined"  value={card_number} onChange={(e) => setCardNumber(e.target.value)}/>
          <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <InputMask mask="99/9999" value={expiry_date} onChange={(e) => setExpiryDate(e.target.value)}>
            {() => <TextField label="Expiry Date" error={expiry_date_error ? true : false} helperText={expiry_date_error}  required margin="normal" variant="outlined" />}
          </InputMask>
          <InputMask mask="999" value={cvv} onChange={(e) => setCvv(e.target.value)}>
            {() => <TextField label="CVV" margin="normal" error={cvv_error ? true : false} helperText={cvv_error}  required variant="outlined" />}
          </InputMask>
          </Box>
        </React.Fragment>:
                  
        <React.Fragment>
          <TextField fullWidth label="Username" margin="normal" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </React.Fragment>
        }
        </CardContent>
        <Divider/>
        <CardActions>
          <Button fullWidth variant="contained" onClick={() => handleCheckout()} disabled={disabledButton}>Checkout</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Checkout;
