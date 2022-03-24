import React from 'react';
import './Cart.css'


const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;

    // for (const product of cart) {
    //     total = total + product.price
    // }
    return (
        <div className='cart'>
            <h2>Order Summery{cart.length}</h2>

            <div className='cart-information'>

                <p>selected item:{cart.length} </p>
                <p>Totla price: ${total} </p>

                <p>Total shiping: </p>
                <p>Txt:</p>

                <h4>grand Total:</h4>
            </div>

        </div>
    );
};

export default Cart;