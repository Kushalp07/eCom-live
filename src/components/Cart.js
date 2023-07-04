import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import "../css/Cart.css"
import { useNavigate } from 'react-router-dom';
// import { cart } from '../assets';


function Cart() {


  const productData = useSelector((state) => state.ecom.productData);
  // console.log(productData)
  const navigate=useNavigate();

  const [totalAmt, setTotalAmt] = useState(Number);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.quantity * item.price;
      return price;
    })
    setTotalAmt(price)
  }, [productData]);

  const [isEmpty, setIsEmpty] = useState("");
  useEffect(() => {
    let empty = true;
    productData.map((item) => {
      if (item.quantity === 0) {
        empty = (true);
        return empty;
      }
      else {
        empty = (false)
        return empty;
      }
    })
    setIsEmpty(empty)
  }, [productData])
  // console.log(isEmpty)

  // console.log(typeof(totalAmt))
  const handleCheckout=()=>{
    navigate('/checkout');
  }


  return (
    <>
      {isEmpty ? (
        <div className='container'>
          <div className='empty'>
          <h1>Your cart is Empty Go and grab some Itme to go ahead!!</h1>
          </div>
        </div>
      ):(
          <div id='main' className='container'>
            <CartItem />
            <div className='check_box'>
              <div className='check_con'>
                <h2>Cart Total</h2>
                <p className='cart_price'>SubTotal:
                  <span >   $ {totalAmt.toFixed(2)}</span>
                </p>
                <span >
                  Shipping: {" "}
                  <p>Lorem ipsum dolor </p>
                </span>
              </div>
              <p className='total'>
                Total <span>$ {totalAmt.toFixed(2)}</span>
              </p>
              <button onClick={handleCheckout} className="btn btn-outline-success w-100">Checkout</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Cart