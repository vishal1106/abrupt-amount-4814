import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sign from '../Pages/Sign'
import Support from '../Pages/Support'
import Usecase from '../Pages/Usecase'
import Works from '../Pages/Works'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
         
            <Route path="/works" element={<Works/>}></Route>
            <Route path='/usecase' element={<Usecase/>}></Route>
            <Route path='/sign' element={<Sign/>}></Route>
            <Route path='/support' element={<Support/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes