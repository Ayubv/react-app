import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++){
    const product=cart[i];
    total=total+product.price;


    }
    let shipping=0;
    if(total>35){
        shipping=0;   
    }
    else if(total>15){
        shipping=4.99;
    }else if(total > 0){
        shipping=12.99;
    }
    const tax=(total/10).toFixed(2);
    const grandTotal=(total + shipping + Number(tax)).toFixed(2);

    const formatNumber=num=>{
        const fixeNumber=num.toFixed(2);
        return Number(fixeNumber);

    }
    return (
        <div className='orderitem'>
            <h1 className='text-info'>Order Summery</h1>
            <h3>Ttems Ordered:{cart.length}</h3> 
            <p>Product Price:${formatNumber(total)}</p>
            <p>Shipping cost:{shipping}</p>
            <p><small>Tax..Vat:{tax}</small></p>
            <p>Total price is:${grandTotal}</p>
            <br></br>
            <Link to='/review'>
            <button className='button-name'>Preview Order</button>
            </Link>
           
        </div>
    );
};

export default Cart;