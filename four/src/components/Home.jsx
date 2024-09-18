// import React from 'react';
// import ProductList from './ProductList';

// const Home = ({ products, addProductHandler }) => {
//   return (
//     <div className="home">
//       <ProductList products={products} 
//       addToBuyHandler={addProductHandler}/>
//     </div>
//   );
// };

// export default Home;

// src/components/Home.js
import React, { useContext } from 'react';
import ProductContext from '../Context/cartcontext';
import ProductList from './ProductList';

const Home = ({value}) => {
  const { products } = useContext(ProductContext);  
  // Get products from context

  return (
    <div className="home">
      
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
          <ProductList products={products} />

      )}
    </div>
  );
};

export default Home;
