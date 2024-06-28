import React, { useContext } from 'react';
import { CartContext } from './cartcontext';

const CartComponent = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    return (
        <div className='cart'>
        <nav>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2>{item.title} </h2>
                            </div> 
                            <div>
                                <p>Kshs: {item.price}</p>
                            </div>
                            <div>
                                <p>Quantity:{item.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.productID)}>delete</button>
                            <div>
                                <button onClick={() => decrementQuantity(item.productID)}>-</button>
                                <button onClick={() => incrementQuantity(item.productID)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
        </div>
    );
};

export default CartComponent;