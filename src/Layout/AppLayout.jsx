import React from 'react'
import Nav from '../Component/Nav'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className='main-container w-full bg-black h-screen p-10 text-white'>
    <Nav/>
    <Outlet/>
    </div>
  )
}

export default AppLayout
