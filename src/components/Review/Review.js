import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([]);
    useEffect(() => {
        //cart
       
        const saveCart=getDatabaseCart();
        const productKeys=Object.keys(saveCart);
        const setProducts=productKeys.map(key=>{

           const product= fakeData.find(pd=>pd.key===key);
           product.quentity=saveCart[key];
           return product;
        });
        //console.log(setProducts);
        setCart(setProducts);



    },[])

    return (
        <div>
            <h1>Order Items={cart.length}</h1>
         {

cart.map(pd=><ReviewItem product={pd}></ReviewItem>)

         }
        </div>
    );
};

export default Review;