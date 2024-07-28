import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../State/Orders/Action'
import { updatePayment } from '../../State/Payment/Action'
import { Alert, AlertTitle, Grid } from '@mui/material'
import TrackOrders from '../Orders/TrackOrders'
import './Style.css'
const Payment_Success = () => {
  const [paymentId, setPaymentId] = useState()
  const [referenceId, setReferenceId] = useState()
  const [paymentStatus, setPaymentStatus] = useState()
  const {orderId} = useParams()
  const dispatch = useDispatch()

  const  {order} = useSelector(store => store)
  console.log(order.order)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_link_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"))
  }, [])


  useEffect(() => {

    const data = (orderId,paymentId)
        dispatch(getOrderById(orderId))
        dispatch(updatePayment(data))
  }, [orderId,paymentId])
  
  

  return (
    <div className='px-2 lg:px-36'>
     <div className="flex flex-col justify-center items-center">
      <Alert variant='filled' severity='success' sx={{mb:6,width:"fit-content"}} >
        <AlertTitle>Payment Success</AlertTitle>
        Congratulation your order is Placed

      </Alert>

      <TrackOrders activeStep={1} />
          <div className="order_card">
            {
              order.order.orderItems?.map((order,index) =>{
                return(
                  <div className="order">
                    <img src={order.product.imageUrl} alt="" />
                  </div>
                )
              })
            }
          </div>
     </div>
    </div>
  )
}

export default Payment_Success