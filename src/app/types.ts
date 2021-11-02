export interface Product{
    id:number,
    name:string,
    price:number,
    image:string
}

export interface CartItem{
    product_id:number,
    quantity:number
}

export interface CheckoutForm{
    first_name:string,
    last_name:string,
    email_address:string,
    payment_method:string,
    card_number?:string,
    expiry_date?:string,
    cvv?:string,
    username?:string,
    password?:string
}

