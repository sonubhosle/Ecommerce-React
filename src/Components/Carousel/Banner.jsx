import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { images } from './Images'

const Banner = () => {


    const items = images.map((item,index) => <img className="img  rounded-md  " role='presentation' onClick={() => navigate} src={item.img} alt="banner"  key={index}/>)
   
    return (
        <div className='carousel w-full h-full bg-white p-1 rounded-md cursor-pointer '>
            <Carousel autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={false}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        marginTop: -15,
                        height: "50px",
                        borderRadius: "3px",
                        width: "50px",
                        fontSize: "70px",
                        marginLeft: "63px",
                        marginRight: "63px"
                    }
                }}>
           {items}
            </Carousel>
        </div>
    )
}

export default Banner