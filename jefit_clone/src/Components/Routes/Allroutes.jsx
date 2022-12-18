import React from 'react'
import {Route, Routes} from "react-router-dom"
import Coach from '../Pages/Coach'
import Elite from '../Pages/Elite'
import Exercies from '../Pages/Exercies'
import Home from "../Pages/Home"
import Register from '../Pages/Register'
import Login from '../Pages/Login'
const Allroutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/elite' element={<Elite/>}></Route>
    <Route path='/coach' element={<Coach/>}></Route>
    <Route path='/exercies' element={<Exercies/>}></Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>} />
    
</Routes>
  

    </div>
  )
}

export default Allroutes