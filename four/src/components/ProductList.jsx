// import React, { useState } from 'react';

// const ProductList = ({ products ,addToCartHandler , addToBuytHandle , addProductHandler }) => {
//        const [cart , setCart]= useState(addToCartHandler)
//   return (
//     <div className="product-list" >
//       {products.length === 0 ? (
//         <p style={{color : 'white', marginTop: '20%'} }>No products available.</p>
//       ) : (
//         products.map((product) => (
//           <div className="productCard">
//             <img src={product.imgSrc} alt={product.name} />
//             <h3  style={{color: 'black'}}>{product.name}</h3>
//             <p>Price: ₹{product.price}</p> 
//             <p>{product.description}</p>
//             <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
//                <ProductCard

//                 key={product.id}
//               name={product.name}
//               id={product.id}
//               price={product.price}
//               imgSrc={product.imgSrc}
//               handler={setCart}
//               buttonText="Add to Cart"
//               color = 'white'
//             />
//               <ProductCard
//                       className="buyNow"
//               name={product.name}
//               id={product.id}
//               price={product.price}
//               imgSrc={product.imgSrc}  
//               handler={() => addToBuytHandle({
//                 // console.log(hyyyyy);
                
//                 name: product.name,
//                 price: product.price,
//                 id: product.id,
//                 quantity: 1,
//                 imgSrc: product.imgSrc
//               })}
//               buttonText="Buy Now"
//             />
//             {/* <p>Small: {product.small} | Medium: {product.meduim} | Large: {product.large}</p> */}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };


// const ProductCard = ({ name, id, price, handler, imgSrc , buttonText }) => (
//     <div className="button-container">
// {/* //       <img src={imgSrc} alt={name} />
// //       <p>{name}</p>
// //       <h4>${price}</h4> */}
//     <button onClick={handler} >

//     {buttonText}
//      </button>
//     </div>
//   );

// export default ProductList ;




import React, { useContext } from 'react';
import CartContext from '../Context/cartcontext';
import { useNavigate } from 'react-router-dom';
// import ProductCard from './ProductCard';  // Assuming you have a ProductCard component

const ProductList = ({ products }) => {
  // const { addItem } = useContext(CartContext); // Get the addItem function from context
  const { addItem, buyItem, clearCart } = useContext(CartContext); // Get addItem and buyItem from context
  const navigate = useNavigate();
  const buyHandler= (item) =>{
    buyItem({ ...item, quantity: 1 })
    clearCart();
    navigate('/buy_now')
  }
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="productCard" key={product.id}>
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
             <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
      <div className=" button-container">

            <button onClick={() => addItem({ ...product, quantity: 1 })}>Add to Cart</button>
            <button onClick={()=>buyHandler(product)}>Buy Now</button>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

