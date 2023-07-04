import React from 'react'
import "../css/Header.css"
import { cart, logoDark, user } from "../assets/index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

  const productData = useSelector((state) => state.ecom.productData);
  // console.log(productData)

  return (
    
    <div className='nav_bg'>
      <div class="container">
        <div className='brand'>
          <Link to='/'>
            <img className='logo' src={logoDark} alt="" />
          </Link>
          <div className='nav_con'>
            <ul className='nav_con'>
              <Link className='home' to='/'><li className='nav_list'>Home</li></Link>
              <li className='nav_list'>Pages</li>
              <li className='nav_list'>Shop</li>
              <li className='nav_list'>Element</li>
              <li className='nav_list'>Blog</li>
            </ul>
            <Link to='/cart'>
              <div className='cart_pos'>
                <img className='cart' src={cart} alt="cart" />
                <span className='cart_no'>{productData.length}</span>
              </div>
            </Link>
            <div>
            <img className='user' src={user} alt="" />
            <div className='user_box'>
              <span className='login'>login</span>
              <span>profile</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
