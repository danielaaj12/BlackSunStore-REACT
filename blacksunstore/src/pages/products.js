import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import Data from '../data/data.json';

import CartContext from '../context'

const datalist = Data.products;
function ProductsList() {
  const [category, setCategory] = useState('all');
  const [modal, setModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [ cart, setCart ]  = useContext(CartContext);

  function addCart(product) {
    setCart(cart => [...cart, product]);
    setCurrentProduct(product);
    setModal(!modal);
  }

  function createModal() {
    return (
      <div className="back-modal">
        <div className="modal">
          <button onClick={() => setModal(!modal)} className="modal-close">x</button>
          <div className="modal-product">
            <div className="modal__img" style={{backgroundImage: `url(${currentProduct.image})` }}></div>
            <h3 className="modal__title">{currentProduct.title}</h3>
            <p className="modal__price">${`${currentProduct.price}`}</p>
          </div>
          <p className="modal-messaje">YOUR PRODUCT WAS ADDED TO THE CART!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="products">
      <Nav />
      <div className="category__container">
        <button 
          onClick={() => setCategory('all')}  
          className={category === 'all' ? 'category__button category__button--active' :  'category__button'}
        >All</button>
        <button 
          onClick={() => setCategory('shoes')}  
          className={category === 'shoes' ? 'category__button category__button--active' :  'category__button'}
        >Shoes</button>
        <button 
          onClick={() => setCategory('top')} 
          className={category === 'top' ? 'category__button category__button--active' :  'category__button'}
        >Tops</button>
        <button 
          onClick={() => setCategory('dresses')}  
          className={category === 'dresses' ? 'category__button category__button--active' :  'category__button'}
        >Dresses</button>
        <button 
          onClick={() => setCategory('accesories')}
          className={category === 'accesories' ? 'category__button category__button--active' :  'category__button'}
        >Accesories</button>
      </div>
      <ul className="cards-container">
        {datalist.map((product) => {
          if ( category === product.category || category === 'all') {
            return <li className="card__item">
              <img className="product__img" src={product.image} alt={product.title} />
              <h3 className="product__title">{product.title}</h3>
              <p className="product__price">${`${product.price}`}</p>
              <button onClick={() => addCart(product)} className="product__button">Add to cart</button>
            </li>
          }
        })}
      </ul>
      <div>{modal ? createModal() : ""}</div>
    </div>
  )
}

export default ProductsList;
