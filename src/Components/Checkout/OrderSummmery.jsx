import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'
import { getOrderById } from '../../State/Orders/Action'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const OrderSummmery = () => {

  const dispatch = useDispatch();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const orderId = searchParams.get('order_id');
  const { order } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])



  return (
    <div>
      <div className='p-5 border-light box-shadow border-radius'>
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className='mt-5'>
        <div className="lg:grid grid-cols-3 relative">
          <div className='col-span-2'>
            {
              order.order?.orderItems.map((item) => <CartItems item={item} />)
            }
          </div>

          <div className="px-5 sticky top-0 h-auto mt-5 lg:mt-0">
            <div className="border rounded-md p-5 ">
              <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
              <hr />
              <div className="space-y-2 ">
                <div className="flex justify-between pt-2 text-black ">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-2 ">
                  <span>Discount</span>
                  <span className=' text-green-600'>-₹{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-2 text-black ">
                  <span>Delivery Charge</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black font-bold ">
                  <span>Total Amount</span>
                  <span className=' text-green-600'>₹{order.order?.totalDiscountPrice}</span>
                </div>
              </div>
              <Button variant='contained' className='w-full' sx={{ px: '2rem', py: '.7rem', mt: "2rem", bgcolor: "#9155fd" }} >
                Checkout
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderSummmery