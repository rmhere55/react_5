 import { createContext } from 'react';

const CartContext = createContext({
  cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem) :  [],
  buy:localStorage.getItem('buy') ? JSON.parse(localStorage.getItem) :  [],
  totalAmountCart: 0,
  totalAmountBuy: 0,
  products: [],
  addProduct: () => {},
  addItem: () => {},
  buyItem: () => {},
  removeItem: () => {},
  removeItemBuy: () => {},
  clearCart: () => {},
});

export default CartContext;

 