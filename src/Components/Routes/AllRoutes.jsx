import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

import Sign from '../Pages/Sign'
import Support from '../Pages/Support'
import Usecase from '../usecase/Usecase'
import Works from '../Pages/Works'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/works" element={<Works/>}></Route>
            <Route path='/usecase' element={<Usecase/>}></Route>
            <Route path='/sign' element={<Sign/>}></Route>
            <Route path='/support' element={<Support/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes