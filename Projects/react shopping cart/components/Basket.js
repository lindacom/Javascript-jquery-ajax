import React from 'react';

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = itemsPrice > 20 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
return (
<aside className="block col-1">
    <h2>Cart Items</h2>
    <div>{cartItems.length === 0 && <div>Cart is empty</div>}
    </div>

    {cartItems.map((item) => (
        <div key={item.id} className="row">
        <div className="col-2">{item.name}</div>
        <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">+</button>}
            <button onClick={() => onRemove(item)} className="remove">-</button>}
      
       </div>
       <div className="col-2 text-right">
            {item.qty} x £{item.price}</div>
        </div>
      
    ))}
    {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2">Items Price:</div>
            <div className="col-1 text-right">£{itemsPrice}</div>
        </div>
        <div className="row">
            <div className="col-2">Tax Price:</div>
            <div className="col-1 text-right">£{taxPrice}</div>
        </div>
        <div className="row">
            <div className="col-2">Shipping Price:</div>
            <div className="col-1 text-right">£{shippingPrice}</div>
        </div>
        <div className="row">
            <div className="col-2"><strong>Total Price:</strong></div>
            <div className="col-1 text-right">£{totalPrice}</div>
        </div>
        <div>
            <hr/>
            <div className="row">
                <button onClick={() => alert('implement Checkout')}>
Checkout
</button>

            </div>
        </div>
        </>
        
    )}
    </aside>
    )
}