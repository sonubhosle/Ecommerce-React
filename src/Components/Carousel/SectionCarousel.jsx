import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (

    <>
      <div className="button-group">
        <button className='prev-btn' onClick={() => previous()}><ChevronLeftIcon /></button>
        <button className='next-btn' onClick={() => next()}><ChevronRightIcon /></button>
      </div>
    </>

  );
};

const SectionCarousel = ({ data, heading }) => {


  const items = data.slice(0, 10).map((item, ind) => <ProductCard product={item} index={ind} />);

  return (
    <div className='bg-white rounded-md p-5'>
      <h2 className='text-2xl font-bold  pl-2 '>{heading}</h2>

      <Carousel className='slider-section' autoPlay infinite responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} >
        {items}

      </Carousel>


    </div>
  )
}

export default SectionCarousel