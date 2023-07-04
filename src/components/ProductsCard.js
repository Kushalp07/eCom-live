import React from 'react'
import "../css/ProductsCard.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/econSlice';
import { ToastContainer, toast } from 'react-toastify';


function ProductsCard({product}) {
    // console.log(product)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = product.title;
    const idString = (id)=>{
        return String(id).toLowerCase().split(" ").join("").replace("/","");
    }
    const rootId = idString(id)
    // console.log(rootId)

const handleDetails=()=>{
    navigate(`/product/${rootId}`,{
        state:{
            item: product,
        }
    })
}

  return (
    // <div onClick={handleDetails} className="con">

    <div className="group">
    <div onClick={handleDetails} className="con">
    <div className='pro_box'>
        <img className='product_img' src={product.image} alt="productImage" />
    </div>
    </div>
    <div className="title_box">
        <div className='title'>
            <h4>{product.title.substring(0,25)}</h4>
        </div>
        <div className='price_box'>
            <h5>${product.price}</h5>
            <p><button onClick={()=>dispatch(addToCart({
                id:product.id,
                title:product.title,
                image:product.image,
                price:product.price,
                quantity:1,
                description:product.discription,
            }
            ))&toast.success(`item added`)} className="btn btn-outline-primary">add to cart</button></p>
        </div>
    </div>
    <ToastContainer
            position='top-left'
            autoClose={3000}
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
    /* </div> */
  )
}

export default ProductsCard
