import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home/Home'

const Routerrouters:React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default Routerrouters