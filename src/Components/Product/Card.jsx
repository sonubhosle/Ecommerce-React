import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ product }) => {


    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${product._id}`)
    }

    return (
        <div onClick={handleNavigate} className='productCard w-[15rem] transition-all cursor-pointer m-1 overflow-hidden'>
            <div className='h-[20rem] '>
                <img className='h-full w-full object-left-top object-cover' src={product.imageUrl} alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold text-gray-600'>{product.brand}</p>
                    <p className='text-black '>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2 mt-2 gap-4'>
                    <p className='font-semibold'>₹{product.price}</p>
                    <p className='line-through opacity-50'>₹{product.discountedPrice}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
                </div>
            </div>

        </div>
    )
}

export default Card