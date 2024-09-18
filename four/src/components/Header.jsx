import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'

import CartContext from '../Context/cartcontext';


const Header = () => {

  const { cart} = useContext(CartContext);
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
        <h2> T/X</h2>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/buy_now'}>Buy Now</Link>
            <Link to={'/cart'}>
            <FiShoppingBag/>
            {/* Cart */}

            <p>{totalCartItems}</p>
            </Link>

        </div>
    </nav>
  )
}

export default Header