
import React, { useContext, useState } from "react";
import CartContext from "../Context/cartcontext";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const { buy, totalAmountBuy, removeItemBuy,  setBuy } =
    useContext(CartContext);
  console.log(buy);
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState({}); // To store selected size per product

  // Handler for changing the selected size
  const handleSizeChange = (productId, size) => {
    setSelectedSize((prevState) => ({ ...prevState, [productId]: size }));
  };

  
  // Handler to increase the quantity of an item
  const handleIncreaseQuantity = (itemId) => {
    setBuy((prevBuy) =>
      prevBuy.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Handler to decrease the quantity of an item (minimum is 1)
  const handleDecreaseQuantity = (itemId) => {
    setBuy((prevBuy) =>
      prevBuy.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const buyItemHandler = () =>{
    alert(`Your order has been placed and your order number is ${Math.floor(Math.random()*1000000000)} `);
    setBuy([])
    navigate('/')
  }
  return (
    <div className="buy-container">
      <div className="buy-details">
        <h2>Product Details</h2>

        {buy.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          buy.map((item) => (
            <div key={item.id} className="product-item">
              <div className="product-info">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  style={{ width: "70px", height: "70px" }}
                />
                <div style={{display: 'flex'  }}>
                  <h3>{item.name}</h3>
                  {/* <p>Size: Free Size • Qty: {item.quantity}</p> */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <p> Size:</p>
                    {item.availableSizes.small && (
                      <label>
                        <input
                          type="radio"
                          name={`size-${item.id}`}
                          value="small"
                          checked={selectedSize[item.id] === "small"}
                          onChange={() => handleSizeChange(item.id, "small")}
                        />
                        
                  <p>  Small  </p>

                      </label>
                    )}
                    {item.availableSizes.medium && (
                      <label>
                        <input
                          type="radio"
                          name={`size-${item.id}`}
                          value="medium"
                          checked={selectedSize[item.id] === "medium"}
                          onChange={() => handleSizeChange(item.id, "medium")}
                        />
                        <p>Medium</p>
                      </label>
                    )}
                    {item.availableSizes.large && (
                      <label>
                        <input
                          type="radio"
                          name={`size-${item.id}`}
                          value="large"
                          checked={selectedSize[item.id] === "large"}
                          onChange={() => handleSizeChange(item.id, "large")}
                        />
                        <p> Large</p>
                      </label>
                    )}
                  </div>
                    <div style={{ display: 'flex', alignItems: 'center' , justifyContent : 'end', marginLeft: '10px '}}>
                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <input 
                      type="text" 
                      value={item.quantity} 
                      readOnly 
                      style={{ textAlign: 'center', width: '30px', margin: '0 10px' }}
                    />
                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  </div>

                </div>
              </div>
              <div className="product-actions">
                <button onClick={() => removeItemBuy(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="price-details">
        <h3>
          Price Details ({buy.length} {buy.length === 1 ? "Item" : "Items"})
        </h3>
        
        <div className="price-breakdown">
          <p>Total Product Price: ₹{totalAmountBuy}</p>
          <p>
            Total Discounts: ₹
            {buy.reduce((acc, item) => acc + item.discount || 10, 0)}
          </p>
        </div>
        <h3>
          Order Total: ₹
          {totalAmountBuy -
            buy.reduce((acc, item) => acc + item.discount || 10, 0)}
        </h3>
        <button className="continue-btn" onClick={buyItemHandler}>buy</button>
      </div>
    </div>
  );
};

export default Buy;
