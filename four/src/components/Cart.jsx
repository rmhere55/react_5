


// import React from 'react';

// const Cart = ({ cartItems }) => {
//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.imgSrc} alt={item.name} />
//             <h3>{item.name}</h3>
//             <p>Price: ₹{item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useContext } from 'react';
import CartContext from '../Context/cartcontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, totalAmountCart, removeItem, clearCart , buyItem} = useContext(CartContext); // Access cart and methods
  const navigate = useNavigate();

  const productBuyHandler = (item) =>{
    console.log(item);
  buyItem( item )
    navigate('/buy_now')
  }
  return (
    <div className="product-list">
      <h2 style={{ textAlign: 'center',
    marginBottom: '20px'}}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{color:'white'}}>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="productCard">
            <img src={item.imgSrc} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div  className="button-container">
            <button onClick={()=>productBuyHandler(item)}>Buy Now</button>

            <button onClick={() => removeItem(item.id)}>Remove</button>

            </div>
          </div>
        ))
      )}

      <div className=" price-details">
      <h3>Total Amount: ₹{totalAmountCart}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
