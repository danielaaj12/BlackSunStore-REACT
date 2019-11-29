import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import Cardimage from '../img/card.png';
import Logoimage from '../img/logobs.png';

import CartContext from '../context'

export default () => {
  const [ cart, setCart ]  = useContext(CartContext);

  return (
    <nav>
      <div>
        <img className="logo__image" alt="" src={Logoimage} />
      </div>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/about">Products</NavLink>
      <div className="cont-btn-cart">
        <NavLink to="/cart"><img className="card__image" src={Cardimage} /><p className="number-cart">{cart.length}</p></NavLink>
      </div>
    </nav>
  )
}
