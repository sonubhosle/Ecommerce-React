import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Cart from '../Components/Cart/Cart'
import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import Product from '../Components/Product/Product'
import Checkout from '../Components/Checkout/Checkout'
import Orders from '../Components/Orders/Orders'
import OrderDetails from '../Components/Orders/OrderDetails'
import Payment_Success from '../Components/Payment_Success/Payment_Success'

const CustomersRoutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/login' element={<Home />} />
                <Route path='/signup' element={<Home />} />s
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout/' element={<Checkout />} />
                <Route path='/account/order' element={<Orders />} />
                <Route path='/account/order/:orderId' element={<OrderDetails />} />
                <Route path='/payment/:orderId' element={<Payment_Success />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default CustomersRoutes