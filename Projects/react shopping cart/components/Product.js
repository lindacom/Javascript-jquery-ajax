import React from 'react';

export default function Product(props) {

    const {product, onAdd, onRemove} = props;

    return (
        <div>
             <h3>{product.name}</h3>   
    <h4>{product.cost}</h4>
     <img src={product.image} alt={product.name}/>
     <button onClick={() => onAdd(product)}>ADD TO CART</button>
     <button onClick={() => onRemove(product)}>Remove</button>
        </div>
    )
}
