// // import React from "react";
// // import toast from "react-hot-toast";
// // import { useDispatch } from "react-redux";

// const img1 =
//   "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
// const img2 =
//   "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

// const Home = () => {
//   const productList = [
//     {
//       name: "Mac Book",
//       price: 12000,
//       imgSrc: img1,
//       id: "asdhajsdbhjabhsjdfdfv",
//     },
//     {
//       name: "Black Shoes",
//       price: 490,
//       imgSrc: img2,
//       id: "sdjfdlaajsdbhjabhsjdfdfv",
//     },
//   ];

//   // const dispatch = useDispatch();

//   const addToCartHandler = (options) => {
//     console.log(options)
//     // dispatch({ type: "addToCart", payload: options });
//     // dispatch({ type: "calculatePrice" });
//     // toast.success("Added To Cart");
//   };
//   return (
//     <div className="home">
//       {productList.map((i) => (
//         <ProductCard
//           key={i.id}
//           imgSrc={i.imgSrc}
//           name={i.name}
//           price={i.price}
//           id={i.id}
//           handler={addToCartHandler}
//         />
//       ))}
//     </div>
//   );
// };

// const ProductCard = ({ name, id, price, handler, imgSrc }) => (
//   <div className="productCard">
//     <img src={imgSrc} alt={name} />
//     <p>{name}</p>
//     <h4>${price}</h4>
//     <div className="button-container">
//     <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
//       Add to Cart
//     </button>
//     <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
//       Buy Now
//     </button>
//     </div>
//   </div>
// );

// export default Home;

// import React, { useState } from 'react';
// import ProductForm from './Product';
// import ProductList from './ProductList';

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   const addProductHandler = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   return (
//     <div className="home">{
//       <ProductForm onAddProduct={addProductHandler} />}
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import ProductList from './ProductList';

// const Home = ({{products , addProductHandler}}) => {
//   // const [products, setProducts] = useState([]);

//   // Function to receive new products from the form (coming from a different file/component)
//   const addProductHandler = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   return (
//     <div className="home">
//       {/* Only display ProductList, no ProductForm here */}
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import ProductList from './ProductList';

const Home = ({ products, addProductHandler }) => {
  return (
    <div className="home">
      <ProductList products={products} />
    </div>
  );
};

export default Home;

