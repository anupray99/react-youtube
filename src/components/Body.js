import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='grid grid-flow-col'>
            <Sidebar   />
            {/* <MainContainer />
            // MainContainer should be replaced By Watchpagee
            To make it dynamic I am replacing "MainContainer" to Outlet */}
            <Outlet />
        </div>
    )
}

export default Body