
import React, { useState } from 'react';
// import '../styles/'
const Product = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [meduim, setMeduim] = useState('');
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
      meduim: Number(meduim),
      small: Number(small),
      large: Number(large)
    };
    onAddProduct(newProduct);
    
    // Reset the form after submission
    setName('');
    setImgSrc('');
    setDescription('');
    setPrice('');
    setSmall('');
    setMeduim('');
    setLarge('');
  };

  return (
    <div className="product">
      <form onSubmit={submitHandler} className="product-form">
        <h2>Add New Product</h2>
        {/* Form elements */}
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
        {/* Similar form fields for imgSrc, description, price, etc. */}
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
          <label htmlFor="meduim">Medium:</label>
          <input
            type="number"
            id="meduim"
            value={meduim}
            onChange={(e) => setMeduim(e.target.value)}
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

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default Product;
