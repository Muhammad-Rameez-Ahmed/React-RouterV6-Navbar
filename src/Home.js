import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Heaader from './components/Heaader'

const Home = () => {
  return (
    <>   
     <Heaader/>
   
    <Outlet/>
    </>

  )
}

export default Home