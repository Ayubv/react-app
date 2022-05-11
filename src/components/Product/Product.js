import React from 'react';
import './Product.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock,key}=props.product;

    return (
        <div className='product'>
            <div className="">
            <img src={props.product.img} alt="" />
            </div>
          
            <div className="">
            <h3 className='product-name'><Link to={"/product/"+key}>{name}</Link></h3>
            
            <p><small>By: {props.product.seller}</small></p>
            <h5>${props.product.price}</h5>

        { props.showAddToCard &&<h4>Only 
        {props.product.stock} Left in stock--Order soon
        </h4>}

                { props.showAddToCard &&<button className='button-name' onClick={()=>props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} />   Add to cart
                </button>}
            </div>
           
            
        </div>
    );
};

export default Product;