import React from 'react'
import "../css/CartItem.css"
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md';
// import { HiOutlineArrowLeft } from 'react-icons/hi';
import { decrementQuantity, deleteItem, increamentQuantity } from '../redux/econSlice';
import { toast, ToastContainer } from 'react-toastify';

function CartItem() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.ecom.productData);
  // console.log(productData)


  return (
    <div id='main'>
      <div className='w-100'>
        <h3>Shopping cart item's</h3>
        <div>
          {
            productData.map((item) => (
              <div key={item.id}
                className='item_box'>
                <div className='cart_item'>
                  <MdOutlineClose onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.quantity} is removed`)} className='close' />
                  <img src={item.image} className='cart_img' alt="" />
                  <span>{item.title.substring(0, 11)}</span>
                  <span>${item.price}</span>

                  <div className="quan_box1">
                    <div className="quantity1">
                      <span>Quantity</span>
                      <div>
                        <span className='quan_btn1' onClick={() => dispatch(
                          decrementQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )}> - </span>
                        <span>{item.quantity}</span> 
                        <span className='quan_btn1' onClick={() => dispatch(
                          increamentQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )}> + </span>
                      </div>
                    </div>
                  </div>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default CartItem;