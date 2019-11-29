import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';

import CartContext from '../context'

export default () => {
    const [ cart, setCart ]  = useContext(CartContext);

    return (
        <div>
            <Nav />
            <ul className="cards-container">
                {cart.map((product) => {
                    return (
                        <li className="card__item">
                            <img className="product__img" src={product.image} alt={product.title} />
                            <h3 className="product__title">{product.title}</h3>
                            <p className="product__price">${`${product.price}`}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
