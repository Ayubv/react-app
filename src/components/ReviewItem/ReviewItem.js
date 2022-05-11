import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quentity}=props.product;
    return (
        <div className='product-name'>
            <p>{name}</p>

            <h4>Quantity:{quentity}</h4>
            <button className='button-name'>Remove</button>
        </div>
    );
};

export default ReviewItem;