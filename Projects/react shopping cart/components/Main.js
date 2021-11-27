import React from 'react';
import Product from './Product';


export default function Main (props) {
    // gets products from props
const {products, onAdd, onRemove } = props;
 
return (
    <main className="App">
    <h1>Products</h1>
    <div className="products">
{products.map((product) => (
 <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}></Product>
       ))}
      </div>
      
      </main>
)}