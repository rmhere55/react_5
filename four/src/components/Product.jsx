
// import React, { useState } from 'react';
// // import '../styles/'
// const Product = ({ onAddProduct }) => {
//   const [name, setName] = useState('');
//   const [imgSrc, setImgSrc] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [medium, setMedium] = useState('');
//   const [large, setLarge] = useState('');
//   const [small, setSmall] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const newProduct = {
//       name,
//       imgSrc,
//       description,
//       price: Number(price),
//       id: Date.now(),
//       medium: Number(medium),
//       small: Number(small),
//       large: Number(large)
//     };
//     onAddProduct(newProduct);
    
//     // Reset the form after submission
//     setName('');
//     setImgSrc('');
//     setDescription('');
//     setPrice('');
//     setSmall('');
//     setMedium('');
//     setLarge('');
//   };

//   return (
//     <div className="product">
//       <form onSubmit={submitHandler} className="product-form">
//         <h2>Add New Product</h2>
//         {/* Form elements */}
//         <div className="form-control">
//           <label htmlFor="name">Product Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         {/* Similar form fields for imgSrc, description, price, etc. */}
//         <div className="form-control">
//           <label htmlFor="imgSrc">Image URL:</label>
//           <input
//             type="text"
//             id="imgSrc"
//             value={imgSrc}
//             onChange={(e) => setImgSrc(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="form-control">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="small">Small:</label>
//           <input
//             type="number"
//             id="small"
//             value={small}
//             onChange={(e) => setSmall(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="meduim">medium:</label>
//           <input
//             type="number"
//             id="medium"
//             value={medium}
//             onChange={(e) => setMedium(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="large">Large:</label>
//           <input
//             type="number"
//             id="large"
//             value={large}
//             onChange={(e) => setLarge(e.target.value)}
//             required
//           />
//          </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-btn">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default Product;

// src/components/Product.js
import React, { useState, useContext } from 'react';
import ProductContext from '../Context/cartcontext';

const Product = () => {
  const { addProduct } = useContext(ProductContext);  // Get addProduct function from context

  const [name, setName] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [medium, setMedium] = useState('');
  const [large, setLarge] = useState('');
  const [small, setSmall] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      imgSrc,
      description,
      price: Number(price),
      id: Date.now(),
      medium: Number(medium),
      small: Number(small),
      large: Number(large),
      availableSizes: { small: Boolean(small), medium: Boolean(medium), large: Boolean(large) }

    };
    addProduct(newProduct);  // Call the context function to add the product

    // Reset the form after submission
    setName('');
    setImgSrc('');
    setDescription('');
    setPrice('');
    setSmall('');
    setMedium('');
    setLarge('');
  };

  return (
    <div className="product">
      <form onSubmit={submitHandler} className="product-form">
        <h2>Add New Product</h2>
        <div className="form-control">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="imgSrc">Image URL:</label>
          <input
            type="text"
            id="imgSrc"
            value={imgSrc}
            onChange={(e) => setImgSrc(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="small">Small:</label>
          <input
            type="number"
            id="small"
            value={small}
            onChange={(e) => setSmall(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="medium">Medium:</label>
          <input
            type="number"
            id="medium"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="large">Large:</label>
          <input
            type="number"
            id="large"
            value={large}
            onChange={(e) => setLarge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default Product;

