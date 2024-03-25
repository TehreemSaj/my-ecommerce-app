import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeItem }) => {
  const totalCost = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default Cart;