import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import  './Shop.css';
import {addToDatabaseCart} from '../../utilities/databaseManager';
const Shop = () => {
    const first10 =fakeData.slice(0,10);
    const [product,setProducts] =useState(first10)
    const [cart,setCart]=useState([])
    const handleAddPro=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        const sameProduct=newCart.filter(pd=>pd.key===product.key);
        const count=sameProduct.length;
        addToDatabaseCart(product.key,count);
        

    }
  
    
    return (
        <div className='shop-container'>
           <div className="product-container">
          

                {

                product.map(pro =><Product 
                    key={pro.key}
                    showAddToCard={true}
                    handleAddProduct={handleAddPro}
                    product={pro}></Product>)
                  

                }
               

           </div>
           <div className="card-container">
                <Cart cart={cart}></Cart>
              
           </div>
          
        </div>
    );
};

export default Shop;