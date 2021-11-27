import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function App() {
// The first value is our current state.
// The second value is the fuction that is used to update our state.
// we set the initial state to an empty array: useState([])

// PRODUCTS DATA
// extracts products from the data object. Pass products to main component which will render products
const { products } = data;

// CART FUNCTIONALITY
  // cart array
  const [cartItems, setCartItems] = useState([]);

  // when button clicked append product to array
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.name === product.name)
  if(exist) {
  setCartItems(
    cartItems.map((x) =>
    x.name === product.name ? {...exist, qty: exist.qty +1 } : x
    )
);
  } else {
   setCartItems([...cartItems, {...product, qty:1}])
  }
};

  
  // when button clicked remove from cart
  const onRemove = (product) => {
    // search cart items where id equals product id
    const exist = cartItems.find((x) => x.name === product.name);
    // if qty 1 remove from cart
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== product.name))
    } else {
    setCartItems(
      cartItems.map((x) =>
      x.name === product.name ? {...exist, qty: exist.qty -1 } : x
      )
   
  );
}
  };
  return (
        <div className="App">
                   <Header className="head-text" countCartItems={cartItems.length}></Header>
<div className="main-text">
  <Main onAdd={onAdd} onRemove={onRemove} products={products}></Main>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Basket>
</div> 
 </div>
  )
     }

    


   


export default App;
