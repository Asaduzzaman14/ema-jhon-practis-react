import React from 'react';
import './Product.css'


const Product = ({ products, HandelCartBtn }) => {
    // console.log(products);
    const { name, seller, price, img, ratings } = products
    return (
        <div className='card-container'>
            <div className='card'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='card-info'>
                    <h3> {name}</h3>
                    <h4>Price : ${price}</h4>
                    <div className='text'>
                        <p>Manufacturer: {seller} </p>
                        <p>ratings: {ratings} </p>
                    </div>
                </div>
                <button onClick={() => { HandelCartBtn(products) }} className='btn-cart'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;