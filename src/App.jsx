import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CustomersRoutes from './Routers/CustomersRoutes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomersRoutes />} />
      </Routes>
    </div>
  )
}

export default App