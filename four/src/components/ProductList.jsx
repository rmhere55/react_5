import React, { useContext } from 'react';
import CartContext from '../Context/cartcontext';
import { useNavigate } from 'react-router-dom';


const ProductList = ({ products }) => {
  const { addItem, buyItem, clearCart } = useContext(CartContext); // Get addItem and buyItem from context
  const navigate = useNavigate();
  const buyHandler= (item) =>{
    buyItem({ ...item, quantity: 1 })
    clearCart();
    navigate('/buy_now')
  }
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="productCard" key={product.id}>
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
             <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
      <div className=" button-container">

            <button onClick={() => addItem({ ...product, quantity: 1 })}>Add to Cart</button>
            <button onClick={()=>buyHandler(product)}>Buy Now</button>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

