import React, {useState} from 'react';
import './App.css';

function App() {

  // cart array
const [cart, setCart] = useState([]);

//const[page, setPage] = useState('products');

// array of products
  const [products] = useState([
    {
name: 'Chocolate',
cost: '£0.70',
image: './images/chocolate.jpg',
    },
    {
      name: 'lemon',
    cost: '£0.90',
    image: './images/chocolate.jpg',
  },
]);

// when button clicked append product to array
const addToCart = (product) => {
  console.log('we are in addToCart');
  setCart([...cart, product]);
}

// when button clicked remove from cart
const removeFromCart = (productToRemove)=> {
setCart(cart.filter((product) => !== productToRemove)
);
};

  return (
    <div className="App">
<header><button>Go to Cart ({cart.length})</button>
</header>
     <h1>Products</h1>
     <div className="products">
     {products.map((product, idx) => (
       <div className="product" key={idx}>
                 <h3>{product.name}</h3>
     <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
    <button onClick={() => addToCart(product)}>ADD TO CART</button>
    <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
        ))}
       </div>
 </div>
  )
     }

   


export default App;
