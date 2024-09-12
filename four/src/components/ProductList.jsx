// import React from 'react';

// const ProductList = ({ products }) => {
//   return (
//     <div className="product-list">
//       {products.length === 0 ? (
//         <p>No products added yet.</p>
//       ) : (
//         products.map((product) => (
//           <div className="productCard" key={product.id}>
//             <img src={product.imgSrc} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <h4>${product.price}</h4>
//             {/* <h4>${product.small}</h4>
//             <h4>${product.midum}</h4>
//             <h4>${product.large}</h4> */}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>Small: {product.small} | Medium: {product.meduim} | Large: {product.large}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
