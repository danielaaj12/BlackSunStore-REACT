import React from 'react';

export default ({image,title,price}) =>
<div className="data__container">
  <h2 className="title">{title}</h2>
  <h3 className="price">{price}</h3>
  <img alt={title} src={image} />
</div>
