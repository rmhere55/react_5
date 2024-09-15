// // src/context/ProductContext.js
// import React, { useState, createContext } from 'react';

// const ProductContext = createContext({
//   products: [],
//   addProduct: () => {},
// });

// export const ProductContextProvider = ({ children }) => {

//   const addProduct = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };
//   return (
//     <ProductContext.Provider value={{ products, addProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductContext;
