import React from 'react'
import Counter from './component/Counter'

import { useDispatch } from 'react-redux'
import Cart from './component/cart'
import Product from './component/Product'
import { Routes,Route } from 'react-router-dom'
import ViewCart from './component/viewCart/ViewCart'
import MainComp from './component/MainComp'
const App = () => {
 const dispatch =  useDispatch()
  return (
    <div className='app'>
      {/* <div>
        <button onClick={()=>dispatch({type : 'INCREMENT'})}>Increment</button>
      </div>
      <Counter/>
      <div>
        <button onClick={()=>dispatch({type : 'DECREMENT'})}>Decrement</button>
      </div> */}
      <Cart />
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    </div>
  )
}

export default App