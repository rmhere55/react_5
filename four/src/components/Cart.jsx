
import React, { useContext } from 'react';
import CartContext from '../Context/cartcontext';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.scss'; // Import the SCSS file

const Cart = () => {
  const { cart, totalAmountCart, setBuy, removeItem, clearCart, buyItem , buy , updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const productBuyHandler = (item) => {
    buyItem(item);
    navigate('/buy_now');
  };

  const buyAllHandler = () => {
    setBuy([...cart]);
    clearCart();
    navigate('/buy_now');
  };

  const increaseQuantity = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };
  return (

    <div className="cart-container">
    <div className="product-details">
      <h2>Product Details</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {/* <p>₹{item.price}</p> */}
              <div className="quantity-control">
                <h5>Quantity  :- </h5>
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
                <div className="item-actions">
                  <button onClick={() => productBuyHandler(item)}>Buy Now</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="price-summary">
      <h3>Price Details ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})</h3>
      <div className="summary-row">
        <p>Total Product Price</p>
        <p>₹{totalAmountCart}</p>
      </div>
      <div className="summary-row">
        <p>Discount</p>
        <p>- ₹   
        {cart.reduce((acc, item) => acc + item.discount || 0, 10)}


        </p>
      </div>
      <div className="summary-row total">
        <p>Order Total</p>
        <p>₹{totalAmountCart
          -
          cart.reduce((acc, item) => acc + item.discount || 10, 0)
          }</p>
      </div>
      <div className="action-buttons">
        <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        <button onClick={buyAllHandler} className="buy-all-btn">Buy All</button>
      </div>
    </div>
  </div>
  );
};

export default Cart;
