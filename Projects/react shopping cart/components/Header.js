import React from 'react';

export default function Header (props) {
    const {countCartItems} = props;
return ( 
    <header className="row">
      
    <div>
    
          <h1>Shopping Cart</h1>
          </div>
          <div>  
        
          <a href="#/cart">
              Cart{' '}
              {countCartItems ? (
                  <button className="badge">{countCartItems}</button>
              ) : (
                  ''
              )}
          </a>{''}
          </div>
   </header>
    )
}