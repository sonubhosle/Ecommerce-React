import { Button } from '@mui/material'
import React from 'react'

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className='space-y-1'>
        <h2 className='text-xl  pb-3'>Delivery Address</h2>
        <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
        <p> {address?.streetAddress},&nbsp;{address?.state},&nbsp;{address?.zipCode}</p>
        <p>City: {address?.city}</p>
        <p> {address?.email}</p>
        <div className='space-y-1 font-semibold'>
          <p>Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
        <Button type='submit' variant='contained' sx={{ px: '2rem', py: '.7rem', bgcolor: "#9155fd" }} >
                    Deliver Here
                  </Button>
      </div>
    </div>
  )
}

export default AddressCard