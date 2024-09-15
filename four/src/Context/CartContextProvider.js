import React, { useState } from 'react';
import CartContext from './cartcontext';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buy, setBuy] = useState([]);
  const [products, setProducts] = useState([]);


  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };



  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  // const buyItemTobuynow = (item) => {
  //   setBuy((prevCart) => [...prevCart, item]);
  // };
  const buyItemTobuynow = (item) => {
    setBuy((prevCart) => {
      // Check if the item already exists in the cart
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
  
      if (itemInCart) {
        // If item is found in the cart, increase the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item is not found, add it to the cart with initial quantity
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  


  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };
  const removeItemFromBuy = (id) => {
    setBuy((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Pass these methods and state to all children
  const contextValue = {
    products,
     addProduct,
    cart,
    buy,
    totalAmountCart: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    totalAmountBuy: buy.reduce((total, item) => total + item.price * item.quantity, 0),
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    removeItemBuy: removeItemFromBuy,
    buyItem: buyItemTobuynow,
    clearCart,
    updateQuantity,
    setBuy
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
