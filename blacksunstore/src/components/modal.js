import React from 'react';
import { Link } from 'react-router-dom';

function Modal(props) {
  return (
    <ul className="card-container--modal">
      <li className="card__item card__item--modal">
        <button onClick={props.functionClose} className="close-button">X</button>
        <img className="product-img--modal" src={props.propitem.image} alt={props.propitem.title} />
        <h3 className="product-title">{props.propitem.title}</h3>  
        <span className="product-price">${props.propitem.price}</ span>  
        <p className="product-description left-space"><span className="bold-txt">Description: </span>{props.propitem.description}</p>
        <p className="product-sizes left-space">
          <span className="bold-txt">Available sizes: </span> {props.propitem.availableSizes}
        </p>
        <p className="product-category left-space">
          <span className="bold-txt">Category: </span>{props.propitem.category}
        </p>
        <Link to = '/Cart' className="product-add">Go to Cart</Link>
      </li>
    </ul>
  );
}

export default Modal;