import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

export const CartItem = ({...products}) => {
    const {removeItem} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <h2>{products.name}</h2>
            </div>
            <div className='cart-info-container'>
                <p>Precio unitario: {products.price}</p>
                <p>Cantidad: {products.quantity}</p>
                <p>Subtotal: {products.totalPrice}</p>
                <button onClick={() => removeItem(products.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}