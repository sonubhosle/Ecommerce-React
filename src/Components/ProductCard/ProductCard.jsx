import React from 'react'
import './Card.css'

const ProductCard = ({ product,index }) => {
  return (
    <div className='product-card '>
    <div className="product-img" key={index}>
        <img className='img' src={product.imageUrl} alt="" />
    </div>
    <div className="product-info">
        <h3 className='title'>{product.brand}</h3>
        <p className='sub-title' >{product.title}</p>
    </div>
</div>
  )
}

export default ProductCard