import React, { useState } from 'react'
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { MdDashboardCustomize } from 'react-icons/md'
import { RiFileList3Line } from 'react-icons/ri'
import Dashboard from './Components/Dashboard'
import Create_Products from './Components/Create_Products'
import Orders from './Components/Orders'
import Customers from './Components/Customers'
import Products from './Components/Products'
const menu = [
    { name: "Dashboard", path: "/admin", icon: <MdDashboardCustomize /> },
    { name: "Products", path: "/admin/products", icon: <RiFileList3Line /> },
    { name: "Customers", path: "/admin/customers", icon: <RiFileList3Line /> },
    { name: "Orders", path: "/admin/orders", icon: <RiFileList3Line /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <RiFileList3Line /> },



]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ overflow:  "auto", color:"#fff", display: "flex", flexDirection: "column", height: "100%", justifyContent: 'space-between' }}>
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon sx={{color:"GrayText"}}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText sx={{color:"GrayText"}}>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>
            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <FaUser />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )


    return (
        <>
            <div className='flex h-full  border-black'>
                <CssBaseline />
                <div className=' w-[15%] bg-slate-800 h-[100vh]' >
                    {drawer}
                </div>
                <div className=' w-[85%]'>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/product/create' element={<Create_Products />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/customers' element={<Customers />} />
                        <Route path='/products' element={<Products />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin