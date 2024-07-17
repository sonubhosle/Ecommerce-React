import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../State/Cart/Action'

const Cart = () => {

    const navigate = useNavigate()
    const dispath = useDispatch()

    const { cart } = useSelector(store => store)
    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }

    useEffect(() => {
        dispath(getCart())
    }, [cart.updateCartItem,cart.deleteCartItem])


    return (
        <div className='mt-10 mb-10 p-5 rounded-md bg-white'>
            <h2 className='text-2xl font-bold   pb-5'>Cart Details</h2>
            <div className="lg:grid  grid-cols-3 relative">
                <div className='col-span-2'>
                    {
                        cart.cart?.cartItems.map((item) => <CartItems item={item} />)
                    }
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border-light box-shadow border-radius p-5 ">
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className="space-y-2 ">
                            <div className="flex justify-between pt-2 text-black ">
                                <span>Price</span>
                                <span>₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between pt-2 ">
                                <span>Discount</span>
                                <span className=' text-green-600'>-₹{cart.cart?.discount}</span>
                            </div>
                            <div className="flex justify-between pt-2 text-black ">
                                <span>Delivery Charge</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between pt-3 text-black font-bold ">
                                <span>Total Amount</span>
                                <span className=' text-green-600'>₹{cart.cart?.totalDiscountPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant='contained' className='w-full' sx={{ px: '2rem', py: '.7rem', mt: "2rem", bgcolor: "#9155fd" }} >
                            Checkout
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart