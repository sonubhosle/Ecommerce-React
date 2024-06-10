import React from 'react'

const AddressCard = ({ address }) => {
  console.log(address)
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

      </div>
    </div>
  )
}

export default AddressCard