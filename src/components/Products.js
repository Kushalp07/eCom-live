import React from 'react'
import "../css/Products.css"
import ProductsCard from './ProductsCard'

function Products({products}) {
  return (
    <div className='py-5'>
        <div className="heading">
            <h1 className='everyday'>Shoping Everyday</h1>
            <span className='line'></span>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae illum possimus, totam repellendus quasi natus earum minus nemo quis quas praesentium consectetur, enim fugit dolorem magnam animi provident fuga.</p>
        </div>
        <div className='products_card gird gird-cols-4'>
            {
                products.map((item)=>(
                    <ProductsCard key={item.id} product={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products
