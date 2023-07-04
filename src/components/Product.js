import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "../css/Product.css"
import { MdOutlineStar } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/econSlice';
import { ToastContainer, toast } from 'react-toastify';


function Product() {

    const dispatch = useDispatch();
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1);
    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item)
    }, [location])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div id='box' className="container">
                <div className='pro_con'>
                    <div className='image'>
                        <img className='pro_img' src={details.image} alt="productImg" />
                    </div>
                    <div className='pro_detail'>
                        <div>
                            <h2>{details.title}</h2>
                        </div>
                        <div className='price'>
                            <div>
                                <h4>${details.price}</h4>
                            </div>
                            <div>
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                            </div>
                        </div>
                        <p className='mt-4'><h4>Description:</h4>
                            <br />{details.description}
                        </p>
                        <div className='quan_box'>
                            <div className='quantity'>
                                <span>Quantity</span>
                                <div>
                                    <button onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} className='quan_btn'>-</button>
                                    <span>{baseQty}</span>
                                    <button onClick={() => setBaseQty(baseQty + 1)} className='quan_btn'>+</button>
                                </div>
                                <div className="add_cart">
                                    <button onClick={() => dispatch(addToCart({
                                        id: details.id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: baseQty,
                                        description: details.discription,
                                    })
                                    ) & toast.success(`${baseQty} Item added`)
                                    } className='add'>add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p>Category: <span>{details.category}</span></p>
                        </div>
                    </div>
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
    )
}

export default Product
