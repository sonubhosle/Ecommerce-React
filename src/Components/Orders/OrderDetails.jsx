import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import TrackOrders from './TrackOrders'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { FaRegStar } from "react-icons/fa";

const OrderDetails = () => {
    return (
        <div className='space-y-5'>
            <h2 className='text-2xl font-bold  '>Order Details</h2>
            <div className='bg-white rounded-md p-5 '>
                <AddressCard />

            </div>
            <div className='bg-white rounded-md p-5 '>
                <h2 className='text-xl font-semibold pb-5 text-gray-600 '>Track Orders</h2>
                <TrackOrders activeStep={3} />
            </div>

            <Grid container className='space-y-4 bg-white rounded-md p-5'>
            <h2 className='text-xl font-semibold pb-3 text-gray-600 '>Your Orders</h2>
                {[1,1,1,1].map((item) =>{
                    return(
                        <Grid item container className=' bg-white box-shadow border-radius  p-2 border ' sx={{ alignItems: "center" }}>
                        <Grid item xs={6}>
                            <div className='flex cursor-pointer'>
                                <img className='w-[6rem] h-[6rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                                <div className="ml-5 space-y-1">
                                    <p className=''>Men Printed Pure Cotton Straight Kurta</p>
                                    <p className='opacity-50 text-xs font-semibold'><span>Color : Pink</span> <span>Size: M</span></p>
                                    <p className='opacity-50 text-xs font-semibold'>Seller : Black</p>
                                    <p className='text-xl font-semibold'>₹1499</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item  className='absolute right-20' >
                            <Box sx={{color:deepPurple[500]}} className="flex items-center">
                                <FaRegStar  size={18} className='mr-1'  />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}

export default OrderDetails