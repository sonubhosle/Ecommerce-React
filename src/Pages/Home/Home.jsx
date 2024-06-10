import React from 'react'
import Carousel from '../../Components/Carousel/Banner'
import SectionCarousel from '../../Components/Carousel/SectionCarousel'
import { mens_kurta } from '../../Components/Data/Mens_Kurta'


const Home = () => {

  
  return (
    <div className='p-3 '>
      <Carousel />
      <SectionCarousel data={mens_kurta} heading={'Mens Kurtas'} />
      <SectionCarousel data={mens_kurta} heading={'Womens Kurtas'} />

    </div>
  )
}

export default Home