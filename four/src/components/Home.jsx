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

const Home = () => {
  const { products } = useContext(ProductContext);  // Get products from context

  return (
    <div className="home">
      {/* <h2>Product List</h2> */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        // products.map((product) => (
        //   <div key={product.id}>
        //     <img src={product.imgSrc} alt={product.name} />
        //     <h3>{product.name}</h3>
        //     <p>Price: ₹{product.price}</p>
        //   </div>
          <ProductList products={products} />
        // ))
      )}
    </div>
  );
};

export default Home;
