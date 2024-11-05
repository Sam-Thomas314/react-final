import React from 'react';
import {handleRemoveFromCart} from './ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, decreaseQuantity, } from './CartSlice';
import './CartItem.css';
import './ProductList.css';

const CartItem = ({onUpdateCart, onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalamount = 0;
    cart.forEach((item) => {
        var cost = item.cost.slice(1);
      totalamount += item.quantity * parseFloat(item.cost.substring(1));

    });
    return totalamount;
  };
  const calculatetotalcount = () => {
    
    let totalcount = 0;
    if(cart) {
        cart.forEach((item) => {
            totalcount += item.quantity;
        })
        return totalcount;
    }
  };
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };
  const handleIncrement = (item) => {
    dispatch(updateQuantity({name: item.name, quantity:item.quantity + 1}));
  };

  const handleDecrement = (item) => {
    if(item.quantity > 1) {
        dispatch(updateQuantity({name: item.name, quantity: item.quantity - 1}));
    } else {
        dispatch(removeItem(item.name)); //this is a new concept to me that we delete if they reduce quantity to 0
    };
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };
  

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.quantity * parseFloat(item.cost.substring(1));
  };

  return (
    
    <div className="cart-container">
        <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <h2 className = 'cart' style={{ color: 'black' }}>Total Cart Count: {calculatetotalcount()}</h2>

      <div>
        {cart.map((item, index) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className='product-description'> {item.description} </div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={ (e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};
export const {calculatetotalcount}  = CartItem.actions;

export default CartItem;