import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CustomersRoutes from './Routers/CustomersRoutes'
import AdminRoutes from './Routers/AdminRoutes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomersRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes/>} />
      </Routes>
    </div>
  )
}

export default App